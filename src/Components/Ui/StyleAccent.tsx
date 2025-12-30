type StyleAccentProps = {
  props: string;
};

export default function StelyAccent({ props }: StyleAccentProps) {
  return <div className={`${props} rounded-full`}></div>;
}
