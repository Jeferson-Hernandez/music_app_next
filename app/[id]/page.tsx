type SongDetailProps = {
  params: {
    id: string
  }
}

const SongDetail = ({ params }: SongDetailProps) => {
  return (
    <div>{params.id}</div>
  )
}

export default SongDetail