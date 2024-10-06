import './InfoSection.css';

type InfoSectionProps = {
    label: string;
    value: string;
  };
  
  export function InfoSection({ label, value }: InfoSectionProps) {
    return (
      <section>
        <h1 className="section-title">{label}</h1>
        <p>{value}</p>
      </section>
    );
  }