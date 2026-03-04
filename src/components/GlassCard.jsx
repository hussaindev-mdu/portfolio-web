const SHARDS = [
  { x: '10%', y: '20%', w: '22px', h: '16px', rot: '-18deg', dx: '-22px', dy: '-28px', delay: '0ms', dur: '620ms' },
  { x: '24%', y: '12%', w: '18px', h: '14px', rot: '10deg', dx: '12px', dy: '-24px', delay: '30ms', dur: '580ms' },
  { x: '40%', y: '30%', w: '24px', h: '18px', rot: '8deg', dx: '18px', dy: '-10px', delay: '40ms', dur: '620ms' },
  { x: '58%', y: '18%', w: '20px', h: '15px', rot: '-12deg', dx: '24px', dy: '-28px', delay: '20ms', dur: '640ms' },
  { x: '74%', y: '26%', w: '22px', h: '16px', rot: '16deg', dx: '22px', dy: '-8px', delay: '60ms', dur: '600ms' },
  { x: '16%', y: '48%', w: '20px', h: '15px', rot: '-5deg', dx: '-18px', dy: '14px', delay: '35ms', dur: '620ms' },
  { x: '34%', y: '56%', w: '24px', h: '18px', rot: '12deg', dx: '-8px', dy: '22px', delay: '75ms', dur: '640ms' },
  { x: '52%', y: '62%', w: '18px', h: '14px', rot: '-14deg', dx: '8px', dy: '24px', delay: '55ms', dur: '600ms' },
  { x: '70%', y: '54%', w: '24px', h: '18px', rot: '6deg', dx: '26px', dy: '16px', delay: '85ms', dur: '620ms' },
  { x: '82%', y: '44%', w: '18px', h: '14px', rot: '-9deg', dx: '20px', dy: '6px', delay: '45ms', dur: '580ms' }
];

function GlassCard({ as: Element = 'div', className = '', children, ...props }) {
  return (
    <Element className={`glass-card ${className}`} {...props}>
      <span className="glass-fx glass-crack" aria-hidden="true" />
      <span className="glass-fx glass-impact" aria-hidden="true" />
      {SHARDS.map((shard, index) => (
        <span
          key={`${shard.x}-${shard.y}-${index}`}
          className="glass-fx glass-shard"
          aria-hidden="true"
          style={{
            '--x': shard.x,
            '--y': shard.y,
            '--w': shard.w,
            '--h': shard.h,
            '--rot': shard.rot,
            '--dx': shard.dx,
            '--dy': shard.dy,
            '--delay': shard.delay,
            '--dur': shard.dur
          }}
        />
      ))}
      {children}
    </Element>
  );
}

export default GlassCard;
