import { useState } from 'react';
import { Scroll, Utensils, Beaker, BookOpen } from 'lucide-react';
import { VideoSearch } from '../components/learn/VideoSearch';
import type { YouTubeVideo } from '../services/youtube';

interface LearnSection {
  title: string;
  icon: JSX.Element;
  items: {
    title: string;
    description: string;
  }[];
}

export function LearnPage() {
  const [currentVideo, setCurrentVideo] = useState<YouTubeVideo | null>(null);

  const sections: LearnSection[] = [
    {
      title: 'Basic Techniques',
      icon: <Scroll className="w-6 h-6 text-primary-accent" />,
      items: [
        {
          title: 'Shaking vs Stirring',
          description: 'Learn when to shake and when to stir your cocktails. Shaking is used for drinks with citrus juices, egg whites, or cream to create proper aeration and emulsification. Stir spirit-forward drinks like Manhattans or Martinis to maintain clarity and achieve proper dilution without over-aeration. A general rule: if it contains only alcoholic ingredients, stir it; if it has juices or other mixers, shake it.'
        },
        {
          title: 'Muddling',
          description: 'Master the art of releasing flavors from fruits and herbs through proper muddling technique. Gentle pressure is key - you want to release essential oils without crushing bitter pith or stems. For herbs like mint, a light press is sufficient to release oils without breaking leaves. For fruits like lime or orange, press firmly enough to release juices but avoid the bitter white pith. Always muddle before adding ice to ensure proper extraction.'
        },
        {
          title: 'Building Drinks',
          description: 'Understand the proper order of ingredients and how it affects the final drink. Start with the least expensive ingredients first, so if you make a mistake, you won\'t waste premium spirits. Add ice last for shaken drinks, first for built drinks. Layer ingredients by density for specific drinks like Long Island Iced Tea or B-52 shots. For carbonated ingredients, always add them last to maintain effervescence. Consider garnish presentation during the build process.'
        },
        {
          title: 'Garnishing',
          description: 'Transform your cocktails with professional garnishing techniques. Fresh citrus twists should be expressed over the drink to release essential oils, then rubbed around the rim. Olives should be speared through the meat, not the pimento. For herbs, gently slap them between your palms to release aromas before garnishing. Learn proper orange and lemon twist cutting techniques, cherry presentation, and salt/sugar rim application. Remember: garnishes are both aesthetic and aromatic components.'
        }
      ]
    },
    {
      title: 'Essential Equipment',
      icon: <Utensils className="w-6 h-6 text-primary-accent" />,
      items: [
        {
          title: 'Shakers & Strainers',
          description: 'Different types of shakers serve specific purposes. Boston shakers provide better seal and more mixing space but require practice. Cobbler shakers are easier to use but may leak with temperature changes. Always use a Hawthorne strainer with a Boston shaker and fine-strain with citrus or muddled ingredients. The spring on your Hawthorne strainer should be tight and clean. For stirred drinks, a julep strainer works best with mixing glasses. Double straining removes ice shards and fruit pulp for a smoother drink.'
        },
        {
          title: 'Measuring Tools',
          description: 'Precision in cocktails is crucial for consistency and balance. Japanese-style jiggers offer the most accurate measurements with their narrow design. Look for jiggers with internal marking lines for common measurements (0.25oz, 0.5oz, 0.75oz). Digital scales can be used for precise measurements of syrups and juices (1oz = 30ml). Speed pourers should be calibrated regularly - most pour at 1oz per count. Always measure spirits and important modifiers; free pouring should only be used for less crucial ingredients like soda water.'
        },
        {
          title: 'Bar Spoons',
          description: 'Bar spoons are essential for more than just stirring. The spiral handle helps create smooth, fluid stirring motions. The spoon end measures roughly 5ml/0.17oz - perfect for small amounts of modifier. Use the back of the spoon for layering drinks by slowly pouring liquid over it. When stirring, hold the spoon between your middle and ring fingers for better control. A proper stir should be smooth and silent, lasting 30-45 seconds for proper dilution and temperature.'
        },
        {
          title: 'Glassware Guide',
          description: 'Proper glassware enhances both presentation and drinking experience. Coupes and Nick & Nora glasses are ideal for stirred cocktails, maintaining temperature better than V-shaped martini glasses. Rocks glasses should be thick-bottomed for muddling and can handle heavy ice. Highballs should be tall and narrow to maintain carbonation longer. Collins glasses are slightly taller than highballs, perfect for drinks with more mixers. Pre-chill glasses for optimal serving temperature - a frozen glass can maintain temperature up to 50% longer.'
        }
      ]
    },
    {
      title: 'Common Ingredients',
      icon: <Beaker className="w-6 h-6 text-primary-accent" />,
      items: [
        {
          title: 'Spirit Basics',
          description: 'Understanding spirits goes beyond basic categories. Vodka isn\'t flavorless - good vodkas have subtle mineral or grain notes. Gin styles vary dramatically: London Dry is juniper-forward, while New Western styles highlight other botanicals. Bourbon must be at least 51% corn and aged in new oak, while rye delivers spicier notes. Tequila must be 100% blue agave for quality cocktails - mixto tequilas can ruin a drink. Rum varies by region: Spanish-style is lighter, English-style darker and richer, French-style (rhum agricole) has distinct grassiness.'
        },
        {
          title: 'Mixers & Modifiers',
          description: 'Quality mixers are crucial for exceptional cocktails. Tonic water should be fresh and never flat - premium brands offer distinct botanical profiles. Bitters are the spice rack of cocktails: Angostura for depth, Peychaud\'s for anise notes, orange bitters for brightness. Fresh citrus juice must be used within 24 hours for optimal flavor. Commercial sour mix should be avoided - always use fresh citrus and simple syrup. Vermouth is wine-based and should be refrigerated after opening, lasting only 1-2 months. Club soda and tonic water are not interchangeable - club soda is neutral, while tonic adds quinine bitterness and sweetness.'
        },
        {
          title: 'Fresh Ingredients',
          description: 'Fresh ingredients require proper handling and storage. Citrus should be room temperature for maximum juice yield, but store them in the fridge for longevity. Herbs should be stored stems-down in water, covered loosely with plastic. Berries should only be washed right before use to prevent molding. When muddling mint, remove large stems to avoid bitter flavors. Ginger can be juiced ahead and stored for 1-2 days. Prep fresh ingredients daily - cut citrus wheels, prepare garnishes, and make sure everything is easily accessible during service.'
        },
        {
          title: 'Syrups & Sweeteners',
          description: 'Syrups add both sweetness and flavor complexity. Simple syrup (1:1 sugar:water) lasts 2 weeks refrigerated; rich simple syrup (2:1) lasts longer and adds texture. Honey syrup (3:1 honey:hot water) adds floral notes and body. Demerara or turbinado sugar syrups add caramel notes perfect for aged spirits. Orgeat (almond syrup) should have bitter almond notes and natural separation. Flavored syrups should be made with real ingredients, not extracts - toast spices, use fresh herbs, and strain well. Add a small amount of neutral spirit to extend shelf life. All syrups should be clearly labeled with production date.'
        }
      ]
    },
    {
      title: 'Mixology Tips',
      icon: <BookOpen className="w-6 h-6 text-primary-accent" />,
      items: [
        {
          title: 'Ice Techniques',
          description: 'Ice is a crucial ingredient that affects dilution, temperature, and presentation. Large cubes (2x2") are ideal for spirit-forward drinks, melting slowly and looking impressive. Crushed ice is perfect for swizzles and juleps, creating a frost on the glass. Collins spears help maintain carbonation in tall drinks. Shake with fresh, dry ice cubes - wet ice dilutes too quickly. For stirred drinks, large, dense ice cubes prevent over-dilution. Clear ice can be made at home by using directional freezing. Always use fresh ice for shaking/stirring - never reuse ice from the mixing process.'
        },
        {
          title: 'Temperature Control',
          description: 'Temperature dramatically affects a cocktail\'s taste and aroma. Stirred drinks should be around 21°F (-6°C), achieved through proper stirring time. Shaken drinks get colder faster, around 19°F (-7°C). Pre-chill all glassware - a room temperature glass can warm a drink by 10°F instantly. Store vermouths and other wine-based products in the fridge at 40°F (4°C). Spirits can be kept at room temperature, but chill vodka and gin for martinis. Don\'t store citrus fruits in very cold areas as it reduces juice yield. Let frozen glasses warm slightly before pouring to prevent frosting over.'
        },
        {
          title: 'Flavor Balance',
          description: 'Balance is key to great cocktails. Follow the sweet-sour-strong-weak principle: 2oz spirit, 1oz sour, 0.75oz sweet is a good starting point. Adjust ratios based on specific ingredients - lime is sourer than lemon, simple syrup sweeter than liqueurs. Consider the proof of your spirits - higher proof needs more dilution. Bitter components like amari or bitters add complexity and depth. Salt can enhance sweetness and mute bitterness - a few drops of saline solution can improve many cocktails. Think about mouthfeel - egg whites add texture, while certain spirits and liqueurs contribute viscosity.'
        },
        {
          title: 'Common Mistakes',
          description: 'Avoid these frequent errors for better drinks. Don\'t shake drinks that should be stirred - you\'ll over-dilute and aerate unnecessarily. Always measure ingredients - free pouring leads to inconsistency. Use fresh citrus juice, never bottled. Store vermouth in the fridge and check dates - old vermouth ruins drinks. Don\'t muddle mint or basil too aggressively - you\'ll release bitter compounds. Taste your drinks before serving, using a straw to sample. Build drinks in order of cost - least expensive first. Don\'t use cloudy ice, it can add off-flavors. Always double-strain drinks with muddled ingredients or citrus juice.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-primary-background pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ui-text mb-4">
            Master the Art of
            <span className="text-primary-accent block mt-2">Mixology</span>
          </h1>
          <p className="text-ui-text/70 text-lg max-w-2xl mx-auto">
            From essential techniques to advanced tips, learn everything you need to know about crafting the perfect cocktail.
          </p>
        </div>

        {/* Video Search Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-ui-text text-center mb-6">
            Watch & Learn
          </h2>
          <VideoSearch onVideoFound={setCurrentVideo} />
          
          {currentVideo && (
            <div className="relative w-full max-w-4xl mx-auto mt-6 rounded-xl overflow-hidden bg-ui-card/30">
              <div className="relative pt-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo.id}`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-ui-text">{currentVideo.title}</h3>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-ui-card/30 backdrop-blur-sm rounded-xl p-6 hover:bg-ui-card/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-2xl font-semibold text-ui-text ml-3">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.title} className="group">
                    <h3 className="text-lg font-medium text-primary-accent mb-1 group-hover:text-primary-accent/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-ui-text/70 group-hover:text-ui-text/80 transition-colors">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
