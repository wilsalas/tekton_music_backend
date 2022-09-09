import CATEGORIES from '@enum/categories.enum';
import { Songs } from 'songs/entities/songs.entity';
import { DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';

export default class CreateSongs implements Seeder {
  public async run(factory: Factory, dataSource: DataSource): Promise<any> {
    const bucket = 'https://tektonbucketws.s3.amazonaws.com';
    await dataSource.createQueryBuilder().delete().from(Songs).execute();

    await dataSource
      .createQueryBuilder()
      .insert()
      .into(Songs)
      .values([
        {
          id: uuidv4(),
          title: 'Animals',
          image: `${bucket}/images/Animals-+Martin+Garrix.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Martin+Garrix+-+Animals+(Official+Video)-gCYcHz2k5x0-192k-1660023119862.mp3`,
          category: { id: CATEGORIES.ELECTRONIC },
        },
        {
          id: uuidv4(),
          title: '‌Scared to be Lonely',
          image: `${bucket}/images/Scared+to+be+lonely-+Martin+Garrix+%26+Dua+Lipa.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Martin+Garrix+%26+Dua+Lipa+-+Scared+To+Be+Lonely+(Official+Video)-e2vBLd5Egnk-192k-1659735941796.mp3`,
          category: { id: CATEGORIES.ELECTRONIC },
        },
        {
          id: uuidv4(),
          title: '‌Waiting for love',
          image: `${bucket}/images/Waiting+for+love-+Avicii.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Avicii+-+Waiting+For+Love-cHHLHGNpCSA-192k-1659759417598.mp3`,
          category: { id: CATEGORIES.ELECTRONIC },
        },

        {
          id: uuidv4(),
          title: `In case you didn't know`,
          image: `${bucket}/images/In+case+you+didn't+know-+Brett+Young.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Brett+Young+-+In+Case+You+Didn't+Know+(Official+Music+Video)-7qaHdHpSjX8-192k-1660175009424.mp3`,
          category: { id: CATEGORIES.COUNTRY },
        },
        {
          id: uuidv4(),
          title: '‌Remember when',
          image: `${bucket}/images/Remember+when-+Alan+Jackson.png`,
          song: `${bucket}/songs/onlymp3.to+-+Alan+Jackson+-+Remember+When+(Official+Music+Video)-TTA2buWlNyM-192k-1660279434546.mp3`,
          category: { id: CATEGORIES.COUNTRY },
        },
        {
          id: uuidv4(),
          title: 'As good as I was once',
          image: `${bucket}/images/_As+good+as+I+was+once-+Toby+Keith.png`,
          song: `${bucket}/songs/onlymp3.to+-+Toby+Keith+-+As+Good+As+I+Once+Was-ldQrapQ4d0Y-192k-1660239323296.mp3`,
          category: { id: CATEGORIES.COUNTRY },
        },

        {
          id: uuidv4(),
          title: 'Too good at goodbyes ',
          image: `${bucket}/images/_Too+good+at+goodbyes+-+Sam+Smith.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Sam+Smith+-+Too+Good+At+Goodbyes+(Official+Video)-J_ub7Etch2U-192k-1659857456188.mp3`,
          category: { id: CATEGORIES.POP },
        },
        {
          id: uuidv4(),
          title: 'Señorita',
          image: `${bucket}/images/_Se%C3%B1orita-+Camila+Cabello+%26+Shawn+Mendes.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Shawn+Mendes%2C+Camila+Cabello+-+Se%C3%B1orita+(Official+Music+Video)-Pkh8UtuejGw-192k-1659582998881.mp3`,
          category: { id: CATEGORIES.POP },
        },
        {
          id: uuidv4(),
          title: 'Somebody that I used to know',
          image: `${bucket}/images/_Somebody+that+I+used+to+know-+Sotye+%26+Kimbra.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Gotye+-+Somebody+That+I+Used+To+Know+(feat.+Kimbra)+%5BOfficial+Music+Video%5D-8UVNT4wvIGY-192k-1659495984655.mp3`,
          category: { id: CATEGORIES.POP },
        },

        {
          id: uuidv4(),
          title: `I was made for lovin' you`,
          image: `${bucket}/images/_I+was+made+for+lovin'+you+-+Kiss.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Kiss+-+I+Was+Made+For+Lovin'+You-ZhIsAZO5gl0-192k-1660279484197.mp3`,
          category: { id: CATEGORIES.ROCK },
        },
        {
          id: uuidv4(),
          title: '‌November rain',
          image: `${bucket}/images/_November+rain-+Guns+N'+Roses.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Guns+N'+Roses+-+November+Rain-8SbUC-UaAxE-192k-1660109054555.mp3`,
          category: { id: CATEGORIES.ROCK },
        },
        {
          id: uuidv4(),
          title: '‌‌In the end',
          image: `${bucket}/images/_In+the+end-+Linkin+Park.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+In+The+End+%5BOfficial+HD+Music+Video%5D+-+Linkin+Park-eVTXPUF4Oz4-192k-1659332102343.mp3`,
          category: { id: CATEGORIES.ROCK },
        },

        {
          id: uuidv4(),
          title: '‌Is this love',
          image: `${bucket}/images/_Is+this+love-+Eminen+%26+50+Cent.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Eminem%2C+50+Cent+-+Is+This+Love+('09)+(Visualizer)-Zl64MRAqQxk-160k-1660272634816.mp3`,
          category: { id: CATEGORIES.RAP },
        },
        {
          id: uuidv4(),
          title: 'Survival',
          image: `${bucket}/images/_Survival-+Eminen.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Eminem+-+Survival+(Explicit)-NlmezywdxPI-192k-1660267127426.mp3`,
          category: { id: CATEGORIES.RAP },
        },
        {
          id: uuidv4(),
          title: 'Lose yourself',
          image: `${bucket}/images/_Lose+yourself-+Eminen.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Eminem+-+Lose+Yourself+%5BHD%5D-_Yhyp-_hX2s-192k-1660269230633.mp3`,
          category: { id: CATEGORIES.RAP },
        },
        {
          id: uuidv4(),
          title: 'Candy shop',
          image: `${bucket}/images/_Candy+shop-+50+Cent.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+50+Cent+-+Candy+Shop+(Official+Music+Video)+ft.+Olivia-SRcnnId15BA-192k-1660173165141.mp3`,
          category: { id: CATEGORIES.RAP },
        },

        {
          id: uuidv4(),
          title: 'Bichota',
          image: `${bucket}/images/_Bichota-+Karol+G.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+KAROL+G+-+BICHOTA+(Official+Video)-QaXhVryxVBk-192k-1659481508638.mp3`,
          category: { id: CATEGORIES.REGGUAETON },
        },
        {
          id: uuidv4(),
          title: 'Yonaguni',
          image: `${bucket}/images/_Yonaguni-+Bad+Bunny.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Bad+Bunny+-+Yonaguni+(Video+Oficial)-doLMt10ytHY-192k-1659527054685.mp3`,
          category: { id: CATEGORIES.REGGUAETON },
        },
        {
          id: uuidv4(),
          title: '‌Ojitos lindos',
          image: `${bucket}/images/_Ojitos+lindos-+Bad+Bunny.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Bad+Bunny+(ft.+Bomba+Est%C3%A9reo)+-+Ojitos+Lindos+(360%C2%B0+Visualizer)++Un+Verano+Sin+Ti-10EX-_h4pYc-192k-1660277609302.mp3`,
          category: { id: CATEGORIES.REGGUAETON },
        },

        {
          id: uuidv4(),
          title: 'Thinking out loud',
          image: `${bucket}/images/_Thinking+out+loud-+Ed+sheeran.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Ed+Sheeran+-+Thinking+Out+Loud+(Official+Music+Video)-lp-EO5I60KA-192k-1659441274217.mp3`,
          category: { id: CATEGORIES.ROMANTIC },
        },
        {
          id: uuidv4(),
          title: 'Easy on me',
          image: `${bucket}/images/_Easy+on+me-+Adele.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Adele+-+Easy+On+Me+(Official+Video)-U3ASj1L6_sY-192k-1660289286812.mp3`,
          category: { id: CATEGORIES.ROMANTIC },
        },
        {
          id: uuidv4(),
          title: `‌I'm not the only one`,
          image: `${bucket}/images/_I'm+not+the+only+one-+Sam+Smith.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Sam+Smith+-+I'm+Not+The+Only+One+(Official+Video)-nCkpzqqog4k-192k-1660185791839.mp3`,
          category: { id: CATEGORIES.ROMANTIC },
        },

        {
          id: uuidv4(),
          title: 'Sweat',
          image: `${bucket}/images/_Sweat-+Inner+Circle.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Inner+Circle+-+Sweat+(A+La+La+Long)-uc2UEfWjvo8-192k-1660245258685.mp3`,
          category: { id: CATEGORIES.REGGAE },
        },
        {
          id: uuidv4(),
          title: 'Jamming',
          image: `${bucket}/images/_Jamming-+Bob+Marley.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Bob+Marley+-+Jamming-_qRN8HoZtbo-192k-1660297180826.mp3`,
          category: { id: CATEGORIES.REGGAE },
        },
        {
          id: uuidv4(),
          title: '‌Could you be loved',
          image: `${bucket}/images/_Could+you+be+loved-+Bob+Marley.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Bob+Marley+%26+The+Wailers+-+Could+You+Be+Loved+(Official+Music+Video)-1ti2YCFgCoI-192k-1659896078854.mp3`,
          category: { id: CATEGORIES.REGGAE },
        },

        {
          id: uuidv4(),
          title: '‌Tu con el',
          image: `${bucket}/images/_Tu+con+el+-+Frankie+Ruiz.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Tu+Con+El-OesXvuWhDnw-192k-1659680703655.mp3`,
          category: { id: CATEGORIES.SALSA },
        },
        {
          id: uuidv4(),
          title: '‌Me hace daño verte',
          image: `${bucket}/images/_Me+hace+da%C3%B1o+verte-+Fresto.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+ME+HACE+DA%C3%91O+VERTE-xf8TaFoog1o-192k-1659763982559.mp3`,
          category: { id: CATEGORIES.SALSA },
        },
        {
          id: uuidv4(),
          title: 'Oiga, Mire, Vea',
          image: `${bucket}/images/_Oiga%2C+Mire%2C+Vea-+Guayacan+Orquesta.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Oiga%2C+Mire%2C+Vea-4Ponh0L0rj4-192k-1660289847950.mp3`,
          category: { id: CATEGORIES.SALSA },
        },

        {
          id: uuidv4(),
          title: 'Adiós Amor',
          image: `${bucket}/images/_Adi%C3%B3s+Amor-+Christian+Nodal.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Christian+Nodal+-+Adi%C3%B3s+Amor+(Video+Oficial)-ETLoTxVVvjM-192k-1660193659502.mp3`,
          category: { id: CATEGORIES.RANCHERA },
        },
        {
          id: uuidv4(),
          title: '‌Por tú maldito amor',
          image: `${bucket}/images/_Por+t%C3%BA+maldito+amor-+Vicente+Fernandez.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Vicente+Fern%C3%A1ndez+-+Por+Tu+Maldito+Amor-gfm2zSgQ8cQ-192k-1660289903220.mp3`,
          category: { id: CATEGORIES.RANCHERA },
        },
        {
          id: uuidv4(),
          title: '‌‌Dulce pecado',
          image: `${bucket}/images/_Dulce+pecado-+Jessi+Uribe.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Jessi+Uribe+-+Dulce+Pecado+l+Video+Oficial--b21-NCfNzM-192k-1660282734560.mp3`,
          category: { id: CATEGORIES.RANCHERA },
        },
        {
          id: uuidv4(),
          title: 'Un millón de primaveras ',
          image: `${bucket}/images/_Un+mill%C3%B3n+de+primaveras+-+Vicente+Fernandez.jpg`,
          song: `${bucket}/songs/onlymp3.to+-+Vicente+Fern%C3%A1ndez+-+Un+Millon+De+Primaveras-M3CbRJ6jgQc-192k-1660231140880.mp3`,
          category: { id: CATEGORIES.RANCHERA },
        },
      ])
      .execute();
  }
}
