"use client";

import { useState } from "react";
import { deleteQuote, deleteEvidence, deleteRoast } from "@/app/actions";
import { X, Trash2 } from "lucide-react";

export function DeleteButton({ id, type, className }: { id: string, type: "quote" | "evidence" | "roast", className?: string }) {
  const [modal, setModal] = useState<"closed" | "confirm" | "password">("closed");
  const [secret, setSecret] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Close modal and reset state
  function closeModal() {
    setModal("closed");
    setSecret("");
    setErrorMsg("");
  }

  // Step 1: Show confirmation dialog
  function showConfirmation() {
    setErrorMsg("");
    setModal("confirm");
  }

  // Step 2: From confirmation, show password prompt
  function proceedToPassword() {
    setErrorMsg("");
    setModal("password");
  }

  async function handleDelete() {
    if (!secret.trim()) {
      setErrorMsg("Secret code required");
      return;
    }
    setIsPending(true);
    setErrorMsg("");
    
    try {
      let res;
      if (type === "quote") {
        res = await deleteQuote(id, secret);
      } else if (type === "evidence") {
        res = await deleteEvidence(id, secret);
      } else {
        res = await deleteRoast(id, secret);
      }
      
      if (res?.error) {
        setErrorMsg(res.error);
      } else if (res?.success) {
        closeModal();
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "An error occurred. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  if (modal === "closed") {
    return (
      <button 
        onClick={showConfirmation} 
        className={`bg-white text-gray-300 hover:text-[#b31446] border-2 border-transparent hover:bg-[#ff728d]/10 hover:border-[#ff728d] w-8 h-8 flex items-center justify-center rounded-full transition-all ${className}`}
        aria-label="Delete"
        title="Delete"
      >
        <Trash2 size={16} />
      </button>
    );
  }

  if (modal === "confirm") {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm border-2 border-[#b31446]">
          <h2 className="text-xl font-bold text-[#322f22] mb-4">Confirm Deletion</h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this {type}? This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={proceedToPassword}
              className="px-4 py-2 rounded bg-[#b31446] text-white hover:bg-[#8c0f34] transition font-bold"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (modal === "password") {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm border-2 border-[#b31446]">
          <h2 className="text-xl font-bold text-[#322f22] mb-4">Enter Secret Code</h2>
          <input 
            type="password" 
            value={secret}
            onChange={e => setSecret(e.target.value)}
            placeholder="Secret Code"
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#b31446]"
            onKeyDown={e => e.key === "Enter" && handleDelete()}
            autoFocus
          />
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
              {errorMsg}
            </div>
          )}
          <div className="flex gap-3 justify-end">
            <button
              onClick={closeModal}
              disabled={isPending}
              className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="px-4 py-2 rounded bg-[#b31446] text-white hover:bg-[#8c0f34] transition font-bold disabled:opacity-50"
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
