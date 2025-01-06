import Dua from "./Dua"
import Search from "./Search"


const Duas = () => {
  return (
    <div className="w-full">
      
      <div className=" overflow-auto h-[calc(100vh-140px)] rounded-lg">
        <div className="p-5 bg-white rounded-xl">
            <h1><span className="text-[#1FA45B] font-semibold text-base">Section:</span> <span className="font-medium text-base">The servant is dependent on his Lord</span></h1>
        </div>
        <div className="mt-5 flex flex-col gap-5">
            <Dua heading="1. The servant is dependent on his Lord #1" reference="Surah Al-Fatir 35:15" audio={false}>
              <p>
                All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy
              </p>
            </Dua>
            <Dua heading="2. Conditions for Dua to be successful" reference="Bukhari: 844" audio={true}>
                <p>
                Prophet (ﷺ) used to say after every compulsory prayer, The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah. Allah says (interpretation of the meaning): “And there is not a thing but that with Us are its depositories, and We do not send it down except according to a known measure.” (Sura Al-Hijr 15:21) No one can withhold what Allah gives; And, no one can give what he resists.
                </p>

                <p>
                لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
                </p>

                <p>
                  <span className="font-medium">Transliteration:</span>  Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu
                </p>

                <p>
                  <span className="font-medium">Transliteration:</span> There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.
                </p>
            </Dua>
        </div>
      </div>
      
    </div>
  )
}

export default Duas
