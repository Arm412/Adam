type IconListItemProps = {
  icon: string;
  name: string;
};

export default function IconListItem({ icon, name }: IconListItemProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <img src={icon} alt={name} className="w-8 h-8" />
      <span className="text-lg text-textMain font-mono">{name}</span>
    </div>
  );
}
