interface Props {
  embedUrl: string;
}

export default function EpisodePlayer({ embedUrl }: Props) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
      <iframe
        src={embedUrl}
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}