// He utilizado el archivo de LikeButton.tsx como referencia para crear este componente.

import { useState } from "preact/hooks";
import axios from "axios";
import { API_BASE_URL } from "../utils/config.ts";

interface DeleteButtonProps {
  postId: string;
}

export default function DeleteButton({ postId }: DeleteButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleDelete = async () => {
    if (isLoading) return;
    if (!confirm("¿Seguro que quieres eliminar este post?")) return;

    try {
      setIsLoading(true);
      setError("");
      await axios.delete(`${API_BASE_URL}/api/posts/${postId}`);
      // Redirigir al usuario al inicio tras eliminar
      if (typeof window !== "undefined") {
        globalThis.location.href = "/";
      }
    } catch (err) {
      console.error("Error al eliminar el post:", err);
      setError("No se pudo eliminar el post");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="delete-button-container">
      <button
        type="button"
        onClick={handleDelete}
        disabled={isLoading}
        className="delete-post-btn"
        aria-label="Eliminar post"
        style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}
      >
        🗑️ Eliminar post
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}