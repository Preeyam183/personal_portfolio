'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
 id: string;
 title: string;
 eyebrow: string;
 subtitle?: string;
 trigger: ReactNode;
 triggerClassName: string;
 triggerLabel?: string;
 className?: string;
 children: ReactNode;
};

/** Native top-layer dialog: focus trapping, Escape, and focus restoration. */
export function DetailDialog({ id, title, eyebrow, subtitle, trigger, triggerClassName, triggerLabel, className = '', children }: Props) {
 const dialog = useRef<HTMLDialogElement>(null);
 const [open, setOpen] = useState(false);
 useEffect(() => {
  if (!open) return;
  const previous = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  return () => { document.body.style.overflow = previous; };
 }, [open]);
 const close = () => dialog.current?.close();
 return <>
  <button className={triggerClassName} aria-label={triggerLabel} aria-haspopup="dialog" aria-controls={id} onClick={() => { dialog.current?.showModal(); setOpen(true); }}>{trigger}</button>
  <dialog ref={dialog} id={id} className={`experience-dialog ${className}`} aria-labelledby={`${id}-title`} aria-describedby={subtitle ? `${id}-subtitle` : undefined} onClose={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) close(); }}>
   <div className="experience-dialog-panel">
    <div className="experience-dialog-header"><span className="eyebrow">{eyebrow}</span><button className="experience-dialog-close" aria-label="Close details" onClick={close}>×</button></div>
    <h2 id={`${id}-title`}>{title}</h2>
    {subtitle && <p className="experience-dialog-role" id={`${id}-subtitle`}>{subtitle}</p>}
    {children}
   </div>
  </dialog>
 </>;
}
