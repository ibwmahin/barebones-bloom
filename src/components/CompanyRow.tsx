interface Company {
  name: string;
  logoUrl?: string;
}

interface CompanyRowProps {
  companies?: Company[];
}

const CompanyRow = ({
  companies = [
    { name: 'coinbase' },
    { name: 'Spotify' },
    { name: 'zoom' },
    { name: 'slack' },
    { name: 'Dropbox' },
    { name: 'Google' }
  ]
}: CompanyRowProps) => {
  return (
    <section className="py-16 bg-[hsl(var(--muted-light))]">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="logo-pill min-w-[120px] text-center"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {company.logoUrl ? (
                <img
                  src={company.logoUrl}
                  alt={`${company.name} logo`}
                  className="h-6 mx-auto"
                  loading="lazy"
                />
              ) : (
                <span className="text-sm font-medium text-[hsl(var(--muted))]">
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