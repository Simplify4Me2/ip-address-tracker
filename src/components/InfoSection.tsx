import './InfoSection.css';

type InfoSectionProps = {
    label: string;
    value: string | undefined;
    showBreakline: boolean;
  };
  
  export function InfoSection({ label, value, showBreakline }: InfoSectionProps) {
    return (
      <section>
        <div className={`line-break ${showBreakline ? "" : "hide"}`}></div>
        <h1 className="section-title">{label}</h1>
        <p>{value || ""}</p>
      </section>
    );
  }