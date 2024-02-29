import style from '@/app/[id]/page.module.css'
import Image from 'next/image'

type SongDetailProps = {
  params: {
    id: string
  }
}

const SongDetail = ({ params }: SongDetailProps) => {
  return (
    <section className={`${style.container}`}>
      <Image
        src="/assets/asianKungfuGeneration.jpg"
        width={300}
        height={300}
        alt='test'
        className={`${style.fixed} ${style.opacity}`}
      />
      <div>card</div>
    </section>
  )
}

export default SongDetail