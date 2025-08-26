interface Company {
  name: string;
  logoUrl?: string;
}

interface CompanyRowProps {
  companies?: Company[];
}

const CompanyRow = ({
  companies = [
    { name: 'com' },
    { name: 'coinbase' },
    { name: 'Spotify' },
    { name: 'zoom' },
    { name: 'slack' },
    { name: 'Dropbox' },
    { name: 'Zoom' }
  ]
}: CompanyRowProps) => {
  return (
    <section className="pb-24">
      <div className="container">
        <div className="flex flex-wrap justify-start gap-4 md:gap-6">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="logo-pill min-w-[100px] text-center bg-[hsl(var(--muted-light))] border-[hsl(var(--border))]"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {company.logoUrl ? (
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-5 mx-auto"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm font-medium text-[hsl(var(--foreground))]">
                  {company.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyRow;