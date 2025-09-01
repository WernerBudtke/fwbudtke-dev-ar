import { useEffect, useState } from "react";

interface MCStatus {
  online: boolean;
  players?: number;
  maxPlayers?: number;
}

export default function MinecraftStatus() {
  const [status, setStatus] = useState<MCStatus>({ online: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const res = await fetch("/api/mc-status"); // assuming nginx reverse proxy
        const data: MCStatus = await res.json();
        setStatus(data);
      } catch (err) {
        setStatus({ online: false });
      } finally {
        setLoading(false);
      }
    }

    fetchStatus();

    // optional: poll every 30s
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Checking server status...</div>;

  return (
    <div>
      {status.online ? (
        <div>
          <p>
            Server is online! Players: {status.players}/{status.maxPlayers}
          </p>
          <p>IP: fwbudtke.dev.ar:25565</p>
        </div>
      ) : (
        <p>Server is offline 😢</p>
      )}
    </div>
  );
}
