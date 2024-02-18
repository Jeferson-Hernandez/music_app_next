import style from "@/app/ui/page.module.css"
import HeroSection from "@/app/ui/main/heroSection";
import MusicList from "@/app/ui/main/musicList";

export default function Home() {
 return (
    <div className={`${style.container}`}>
      <HeroSection/>
      <MusicList title="New Releases."/>
    </div>
  );
}
