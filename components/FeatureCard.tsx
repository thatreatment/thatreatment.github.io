type FeatureCardProps = {
  title: string;
  description?: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-gold/50 transition-colors">
      <p className="text-slate-100 font-medium">{title}</p>
      {description && <p className="text-slate-300 mt-2 text-sm">{description}</p>}
    </div>
  );
}
