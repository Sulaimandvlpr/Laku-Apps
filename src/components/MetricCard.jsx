import Icon from './Icon';

export default function MetricCard({ label, value, sub, ikon, peringatan }) {
  return (
    <div
      className={`glass-card relative p-6 ${peringatan ? 'border-l-4 border-tertiary-container' : ''}`}
    >
      <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-panel-tint">
        <Icon name={ikon} className="text-primary-container" size={20} />
      </div>
      <p className="mb-2 text-xs font-medium tracking-wider text-on-surface-variant uppercase">
        {label}
      </p>
      <h3 className={`text-[28px] leading-tight font-bold ${peringatan ? 'text-warning' : 'text-primary'}`}>
        {value}
        {sub && (
          <span className="ml-1 text-sm font-normal text-on-surface-variant">{sub}</span>
        )}
      </h3>
    </div>
  );
}
