import Image from "next/image";
import type React from "react";
import { useEffect, useRef } from "react";
import { BsX } from "react-icons/bs";

export interface Problem {
  id: string | number;
  title: string;
  description: string;
  status: string;
  source: string;
  image: string;
}

export interface ProblemDialogProps {
  isOpen: boolean;
  onClose: () => void;
  problem: Problem | null;
}

export const ProblemDialog = ({
  isOpen,
  onClose,
  problem,
}: ProblemDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  if (!problem && isOpen) return null;

  return (
    <dialog ref={dialogRef} className="modal  bg-base-100/20" onClose={onClose}>
      <div className="modal-box bg-accent text-accent-content min-w-2xl max-h-[95vh] p-0">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20"
          aria-label="Close dialog"
          type="button"
        >
          <BsX className="" size={20} />
        </button>

        <div className=" h-80 relative w-full">
          <Image
            className=" object-cover"
            src={problem?.image ?? ""}
            alt={problem?.title ?? ""}
            fill
          />
        </div>

        <div className="flex flex-col gap-6  p-4">
          <section className=" flex flex-col gap-2">
            <h3 className="h3">{problem?.title ?? ""}</h3>
            <p className=" text-accent-content/80 text-base">
              {problem?.description ?? ""}
            </p>
            <div className=" bg-secondary text-accent-content p-2 text-base rounded-lg shadow-lg">
              {problem?.status}
            </div>
            <div className=" flex flex-col gap-1">
              <span className=" text-base">Source:</span>
              <div className=" badge">{problem?.source}</div>
            </div>
          </section>
          <footer className=" w-full justify-end flex ">
            <button
              type="button"
              className=" btn btn-outline text-accent-content w-fit"
              onClick={onClose}
            >
              close
            </button>
          </footer>
        </div>
      </div>
    </dialog>
  );
};
