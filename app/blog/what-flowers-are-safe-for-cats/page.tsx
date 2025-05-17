"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function CatSafeFlowersBlogPostPage() {
  const { slug } = useParams()
  const blogPost = {
    title: 'What Flowers Are Safe for Cats? 10 Gorgeous Pet-Friendly Picks You'll Love',
    excerpt: 'Discover beautiful flowers that are safe for your feline friends! Our expert guide covers 10 non-toxic flowers for cat-friendly homes, with care tips and styling advice.',
    content: `
      <p>As a cat parent and plant enthusiast, I've spent years navigating the delicate balance of keeping gorgeous flowers in my home without endangering my curious feline companions. Many popular blooms can be toxic to cats, causing everything from mild digestive upset to serious health emergencies when nibbled on. But don't worry – you absolutely can enjoy beautiful flowers while keeping your kitties safe!</p>

      <div className="bg-surface-muted p-6 rounded-lg my-8">
        <h3 className="font-bold text-lg mb-4">Key Takeaways: Cat-Safe Flowers</h3>
        <ul className="space-y-2">
          <li>✅ <strong>Safe options include:</strong> Roses, sunflowers, gerbera daisies, zinnias, petunias, orchids, African violets, camellias, snapdragons, and coneflowers</li>
          <li>✅ <strong>Always avoid:</strong> Lilies, tulips, daffodils, chrysanthemums, hydrangeas, and azaleas</li>
          <li>✅ <strong>Best indoor choices:</strong> Orchids and African violets thrive indoors and stay safe for cats</li>
          <li>✅ <strong>For outdoor gardens:</strong> Sunflowers, zinnias, and snapdragons create cat-friendly landscapes</li>
          <li>✅ <strong>When in doubt:</strong> Always check with ASPCA's toxic plant database or consult your vet</li>
        </ul>
      </div>

      <h2 id="why-cat-safe-flowers">Why Cat-Safe Flowers Matter: Understanding Feline Curiosity</h2>
      <p>Cats are natural explorers with a tendency to nibble on plants and flowers. I've learned this lesson firsthand when my own cat, Mittens, decided my birthday bouquet looked like lunch! Their curious nature combined with grooming habits means even flowers they don't directly eat can cause problems if pollen gets on their fur.</p>
      
      <p>Common symptoms of flower toxicity in cats include:</p>
      <ul>
        <li>Drooling and foaming at the mouth</li>
        <li>Vomiting or diarrhea</li>
        <li>Lethargy or weakness</li>
        <li>Difficulty breathing</li>
        <li>Changes in urination patterns</li>
      </ul>
      
      <p>The most dangerous flowers for cats are true lilies (including Easter lilies, tiger lilies, and stargazer lilies), which can cause kidney failure even in small amounts. But don't worry – there are plenty of beautiful alternatives that are completely safe!</p>

      <h2 id="roses">1. Roses: Classic Beauty Without the Worry</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/cat-safe-roses-flower-pet-friendly.webp"
          alt="Beautiful roses that are safe for cats in a vase"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>I love keeping roses in my home because they're completely non-toxic to cats according to the ASPCA. These classic beauties come in countless colors and varieties, making them perfect for any decor style.</p>
      
      <p>Just be mindful of the thorns, which could hurt curious paws – I always trim them off before bringing roses inside. I've found that spray roses tend to have fewer thorns and create beautiful, full arrangements that my cats show little interest in.</p>
      
      <p><strong>Pro Tip:</strong> Rose petals that have fallen onto your table or counter are also safe, so no need to panic if your cat investigates them. After years of testing different flowers, I've found that most cats actually aren't very interested in roses once they give them an initial sniff.</p>
      
      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-primary/10">
            <th className="border p-2 text-left">Rose Type</th>
            <th className="border p-2 text-left">Best Features</th>
            <th className="border p-2 text-left">Longevity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Garden Roses</td>
            <td className="border p-2">Fuller blooms, stronger fragrance</td>
            <td className="border p-2">4-5 days</td>
          </tr>
          <tr>
            <td className="border p-2">Spray Roses</td>
            <td className="border p-2">Multiple blooms per stem, fewer thorns</td>
            <td className="border p-2">7-10 days</td>
          </tr>
          <tr>
            <td className="border p-2">Standard Roses</td>
            <td className="border p-2">Classic look, widely available</td>
            <td className="border p-2">5-7 days</td>
          </tr>
        </tbody>
      </table>

      <h2 id="sunflowers">2. Sunflowers: Bright, Bold, and Completely Cat-Safe</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/sunflowers-cat-safe-bright.webp"
          alt="Bright yellow sunflowers that are safe for cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Sunflowers are among my favorite cat-safe flowers because they're not just non-toxic – they're also sturdy enough to withstand batting paws. Their cheerful yellow faces bring instant warmth to any room, and they last surprisingly long in a vase – I've had cut sunflowers stay fresh for over a week with proper care.</p>
      
      <p>If you're a gardener, sunflowers are excellent cat-safe options for your outdoor space too. They grow quickly and provide beautiful cut flowers all summer long. I've noticed my cats actually enjoy lounging beneath the towering stalks in my garden, using them as natural shade spots on hot days.</p>
      
      <p><strong>Did you know?</strong> Sunflowers are what botanists call "compound flowers" – what looks like one flower is actually thousands of tiny florets! The round face of a sunflower contains up to 2,000 individual flowers, with each one potentially developing into a sunflower seed.</p>
      
      <div className="bg-surface-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-4">Sunflower Care Tips:</h4>
        <ul>
          <li>✂️ Cut stems at a 45-degree angle before placing in water</li>
          <li>💧 Change water every 2-3 days to maximize vase life</li>
          <li>☀️ Place in bright, indirect light rather than direct sun</li>
          <li>🌡️ Keep away from heat sources that can speed wilting</li>
        </ul>
      </div>
      
      <div className="my-6">
        <a href="https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-throw-pillow" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Bring Home Sunflower Style
        </a>
      </div>

      <h2 id="gerbera-daisies">3. Gerbera Daisies: Vibrant Colors That Won't Harm Your Cat</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/gerbera-daisies-cat-safe-vibrant.webp"
          alt="Colorful gerbera daisies that are non-toxic to cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Gerbera daisies (also called gerber daisies) are among the most cheerful, colorful flowers that are completely safe for cat households. Available in practically every color except true blue, these bold blooms make striking arrangements that can brighten even the darkest corner.</p>
      
      <p>I particularly love mixing different colored gerberas together for a rainbow effect. They're relatively sturdy flowers with thick stems, making them somewhat resistant to playful cat paws. In my experience, their rigid texture doesn't appeal to most cats for chewing, though every feline has different preferences.</p>
      
      <p>One thing I've learned about gerberas is that they're extremely sensitive to deep water. Unlike other flowers that benefit from deep vase water, gerberas perform best with just 1-2 inches of water in the vase. This happy coincidence means less chance of tipped-over vases from curious cats!</p>
      
      <p><strong>Styling tip:</strong> Gerbera daisies look stunning when displayed individually in bud vases spread across a table or mantel. This dispersed arrangement style can also discourage cats since there's no dense bouquet to investigate.</p>

      <h2 id="zinnias">4. Zinnias: Colorful, Long-Lasting, and Cat-Friendly</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/non-toxic-zinnias-safe-for-cats.webp"
          alt="Colorful zinnia flowers that are safe around cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>If you're looking for cat-safe flowers that offer incredible variety and longevity, zinnias are a perfect choice. These non-toxic blooms come in nearly every color imaginable and various forms from single to fully double pompom styles.</p>
      
      <p>I've been growing zinnias in my garden for years, and they're remarkable for several reasons. They're incredibly easy to grow from seed, they bloom continuously from summer until frost, and they make excellent cut flowers that can last 7-10 days in a vase. The more you cut them, the more they branch and produce additional flowers!</p>
      
      <p>Here's something I've noticed after years of growing zinnias around my cats: the slightly rough texture of zinnia stems and leaves seems to deter most cats from nibbling. While they're completely non-toxic, most felines simply aren't interested in them after an initial investigation.</p>
      
      <p><strong>Garden insight:</strong> When growing zinnias, spacing them properly (about 6-12 inches apart) improves air circulation and helps prevent powdery mildew, which can sometimes affect these flowers. Healthy plants produce the best and longest-lasting cut flowers for your cat-safe arrangements.</p>

      <h2 id="petunias">5. Petunias: Cascading Color That's Feline-Friendly</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/cat-safe-hanging-flower-petunias.webp"
          alt="Hanging basket of colorful petunias safe for cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Petunias offer incredible versatility for cat owners who love flowers. According to the ASPCA, these prolific bloomers are completely non-toxic to cats, making them safe choices for both indoor and outdoor displays. Their trumpet-shaped flowers come in countless colors, patterns, and sizes.</p>
      
      <p>While most people think of petunias as outdoor plants for hanging baskets or borders, I've successfully kept them as houseplants in bright windows. The cascading varieties make particularly stunning displays when placed on high shelves where cats can see but not easily reach them.</p>
      
      <p>One thing I've learned about petunias through trial and error is that they're somewhat sticky to touch – their stems and leaves have tiny glandular hairs that produce a mild resin. This natural stickiness tends to discourage cats from playing with or eating them, which is an added bonus beyond their non-toxic status.</p>
      
      <p><strong>Cat-friendly display tip:</strong> For the most cat-safe petunia display, try hanging baskets with cascading varieties placed where cats can enjoy watching the moving flowers but can't access them for nibbling. The gentle movement of the trailing stems seems to fascinate most cats without encouraging chewing.</p>

      <h2 id="orchids">6. Orchids: Elegant, Long-Lasting, and Surprisingly Cat-Safe</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/orchids-cat-safe-elegant-flower.webp"
          alt="Beautiful orchid plant that is non-toxic to cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Many cat owners are surprised to learn that most common orchids – including phalaenopsis (moth orchids), dendrobiums, and cattleyas – are non-toxic to cats according to the ASPCA. These elegant blooms can safely add a touch of sophistication to your cat-friendly home.</p>
      
      <p>What makes orchids particularly special for cat households is their incredible longevity. A well-cared-for phalaenopsis orchid can bloom for 2-4 months, providing extended enjoyment with minimal risk. I've had orchids reblooming in my cat-filled home for years with no incidents.</p>
      
      <p>Something I've noticed from observing my own cats around orchids is that the plants' relative lack of scent seems to make them less interesting to felines. Unlike strongly scented flowers that might attract curious sniffs and nibbles, orchids typically don't engage cats' keen sense of smell.</p>
      
      <p><strong>Care insight:</strong> Many people struggle with orchid care, but I've found one simple rule makes all the difference – only water when the roots turn silvery-gray rather than on a schedule. This typically means watering once every 7-10 days, and it's prevented me from the common mistake of overwatering.</p>
      
      <p>The most common orchid variety, phalaenopsis, actually prefers the same comfortable room temperatures that we (and our cats) enjoy – around 65-75°F. No special conditions required!</p>

      <h2 id="african-violets">7. African Violets: Petite, Pretty, and Perfect for Cat Homes</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/african-violets-cat-safe-houseplant.webp"
          alt="African violet plant with purple flowers safe for cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>African violets are among the most beloved houseplants, and cat owners can rejoice knowing they're completely non-toxic to felines. These charming plants produce clusters of delicate flowers in purples, pinks, whites, and blues above fuzzy, dark green leaves.</p>
      
      <p>I've kept African violets in my cat-friendly home for over a decade, and they've proven to be excellent companions for several reasons. They're compact, so they can be placed on narrow shelves or small spaces where cats don't usually access. They're also continuous bloomers when happy, providing year-round color without needing to be replaced.</p>
      
      <p>One fascinating thing I've observed is that many cats seem to respect the fuzzy texture of African violet leaves. The tiny hairs (trichomes) that give the leaves their velvety appearance may feel unpleasant to sensitive cat paws or tongues, naturally discouraging interaction.</p>
      
      <p><strong>Growth secret:</strong> After years of trial and error, I've found that African violets bloom most prolifically when slightly pot-bound. Resist the urge to repot them into larger containers too frequently – they actually prefer to be somewhat crowded in their pots, which encourages more flowers rather than just leaf growth.</p>
      
      <div className="bg-surface-muted p-6 rounded-lg my-6">
        <h4 className="font-bold mb-4">African Violet Care Essentials:</h4>
        <ul>
          <li>🌞 <strong>Light:</strong> Bright, indirect light - no direct sun</li>
          <li>💧 <strong>Watering:</strong> Allow soil to dry slightly between waterings</li>
          <li>💦 <strong>Humidity:</strong> Appreciate higher humidity, but adapt to normal home conditions</li>
          <li>🌡️ <strong>Temperature:</strong> 65-75°F - perfect for most homes</li>
          <li>🌿 <strong>Feeding:</strong> Use specific African violet fertilizer at 1/4 strength monthly</li>
        </ul>
      </div>

      <h2 id="camellias">8. Camellias: Sophisticated Blooms That Are Feline-Friendly</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/camellias-safe-for-cats-flower.webp"
          alt="Pink camellia flowers that are non-toxic to cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Camellias are elegant flowering shrubs that produce stunning rose-like blooms in winter and early spring when many other plants are dormant. The good news for cat owners is that these sophisticated flowers are non-toxic to our feline friends according to the ASPCA.</p>
      
      <p>I particularly appreciate camellias for cat households because their thick, glossy leaves and sturdy flowers hold up well even if a curious cat decides to bat at them. When used as cut flowers, camellias can float beautifully in shallow water dishes – a display method that minimizes tipping hazards from traditional vases.</p>
      
      <p>Something unique I've learned about camellias is that, unlike many cut flowers, they don't typically need stem cutting or special preservatives. Their woody stems maintain water uptake naturally, and the blooms can last 4-5 days when floated in cool water that's changed daily.</p>
      
      <p><strong>Designer insight:</strong> The formal, symmetrical shape of camellia blooms pairs beautifully with modern, minimalist decor. Try floating a single perfect camellia bloom in a shallow black ceramic dish for a striking, cat-safe accent that looks straight out of a design magazine.</p>

      <h2 id="snapdragons">9. Snapdragons: Whimsical, Vertical Blooms Safe for Cats</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/snapdragons-non-toxic-for-cats.webp"
          alt="Colorful snapdragon flowers that are safe around cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Snapdragons (Antirrhinum) add vertical drama to arrangements with their tower-like flower spikes, and they're completely safe in homes with cats. Available in nearly every color except true blue, these whimsical flowers get their name from the way the blossoms "snap" open and closed when gently squeezed – something I've found amuses human visitors far more than my cats!</p>
      
      <p>One thing I particularly value about snapdragons as cut flowers is their impressive vase life. With proper care, they typically last 7-10 days, making them economical choices for regular home displays. Their slightly bitter taste (while non-toxic) also tends to discourage cats who might take an exploratory nibble.</p>
      
      <p>A fascinating aspect of snapdragons that few people know is that they're slightly fragrant, especially the white and yellow varieties. The scent is subtle but sweet, somewhat reminiscent of vanilla. I've found this mild fragrance doesn't seem to attract cats the way stronger floral scents might.</p>
      
      <p><strong>Arrangement tip:</strong> Snapdragons work beautifully as the "thriller" component in mixed bouquets, providing height and vertical interest. Pair them with rounded flowers like cat-safe roses or gerbera daisies for a balanced composition that's entirely feline-friendly.</p>

      <h2 id="coneflowers">10. Coneflowers (Echinacea): Durable, Beneficial, and Cat-Friendly</h2>
      <div className="relative rounded-lg overflow-hidden my-6">
        <Image
          src="/images/blog/coneflowers-echinacea-cat-safe.webp"
          alt="Purple coneflowers (echinacea) that are non-toxic to cats"
          width={800}
          height={500}
          className="w-full object-cover rounded-lg"
        />
      </div>
      
      <p>Coneflowers, botanically known as Echinacea, round out our list of cat-safe flowers with their distinctive daisy-like blooms featuring raised central cones. These native North American perennials are not only non-toxic to cats but also offer impressive durability as cut flowers.</p>
      
      <p>What I particularly appreciate about coneflowers in my cat-friendly garden is their ability to attract beneficial pollinators while remaining safe for my curious felines who like to explore outdoor plants. The sturdy stems stand up well to brushing cats, and the somewhat rough texture of the leaves doesn't appeal to most cats for chewing.</p>
      
      <p>While purple is the classic coneflower color, modern varieties come in white, yellow, orange, red, and even green hues. I've found that the newer double-flowered varieties make particularly spectacular cut flowers, lasting up to two weeks in a vase with proper care.</p>
      
      <p><strong>Gardener's note:</strong> When established, coneflowers are remarkably drought-tolerant, making them excellent low-maintenance options for outdoor gardens. If you deadhead spent blooms promptly, they'll continue flowering from early summer through fall, providing months of cat-safe cut flower opportunities.</p>
      
      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-primary/10">
            <th className="border p-2 text-left">Flower</th>
            <th className="border p-2 text-left">Best Use</th>
            <th className="border p-2 text-left">Vase Life</th>
            <th className="border p-2 text-left">Special Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Roses</td>
            <td className="border p-2">Formal arrangements</td>
            <td className="border p-2">5-7 days</td>
            <td className="border p-2">Classic beauty, variety of colors</td>
          </tr>
          <tr>
            <td className="border p-2">Sunflowers</td>
            <td className="border p-2">Statement pieces</td>
            <td className="border p-2">7-10 days</td>
            <td className="border p-2">Cheerful, sturdy stems</td>
          </tr>
          <tr>
            <td className="border p-2">Gerbera Daisies</td>
            <td className="border p-2">Colorful accents</td>
            <td className="border p-2">7-10 days</td>
            <td className="border p-2">Bold colors, graphic shapes</td>
          </tr>
          <tr>
            <td className="border p-2">Zinnias</td>
            <td className="border p-2">Cottage-style bouquets</td>
            <td className="border p-2">7-10 days</td>
            <td className="border p-2">Multi-colored options, various forms</td>
          </tr>
          <tr>
            <td className="border p-2">Orchids</td>
            <td className="border p-2">Elegant focal points</td>
            <td className="border p-2">2-4 weeks</td>
            <td className="border p-2">Sophisticated, long-lasting</td>
          </tr>
        </tbody>
      </table>

      <h2 id="cat-friendly-arrangements">Creating Beautiful, Cat-Friendly Flower Arrangements</h2>
      <p>Now that you know which flowers are safe for your feline friends, here are some practical tips for creating and maintaining beautiful arrangements in cat households:</p>
      
      <h3>Strategic Placement</h3>
      <p>The simplest solution is often the most effective: place arrangements where cats can't easily access them. I've had great success with:</p>
      <ul>
        <li>High mantels or shelves out of jumping range</li>
        <li>Behind closed glass cabinet doors</li>
        <li>Center of large dining tables (away from edges)</li>
        <li>Hanging planters for trailing flowers like petunias</li>
      </ul>
      
      <h3>Stable Containers</h3>
      <p>Choose vases and containers that resist tipping. After one too many clean-ups, I've learned to favor:</p>
      <ul>
        <li>Wide-bottomed, heavy vases that won't easily topple</li>
        <li>Shorter, squat arrangements rather than tall, top-heavy ones</li>
        <li>Secured arrangements using floral frogs or rocks in the vase base</li>
        <li>Double-container methods (decorative outer pot, water-holding inner one)</li>
      </ul>
      
      <h3>Deterrent Strategies</h3>
      <p>Sometimes you need a little extra help keeping curious cats away:</p>
      <ul>
        <li>Place citrus peels around arrangements (most cats dislike the scent)</li>
        <li>Use double-sided tape on surfaces around flowers (cats hate sticky paws)</li>
        <li>Provide alternative distractions like cat grass or catnip in a different area</li>
        <li>Try commercial bitter apple spray on the outside of containers (never on flowers)</li>
      </ul>
      
      <p>Remember that individual cats have different personalities – what works for one might not work for another. I've had cats completely ignore flowers and others who see every new plant as a challenge to overcome! Be prepared to adapt your strategies based on your particular feline's behavior.</p>

      <h2 id="flowers-to-avoid">Dangerous Flowers to Always Avoid Around Cats</h2>
      <p>While we've focused on safe options, it's equally important to know which flowers should never enter a home with cats:</p>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
        <h3 className="text-red-700 font-bold mb-2">High-Alert Flowers: Never Bring These Home</h3>
        <ul className="space-y-2">
          <li><strong>True Lilies (Lilium spp.):</strong> All parts are extremely toxic - even small amounts can cause kidney failure</li>
          <li><strong>Daffodils:</strong> Bulbs are most toxic, but all parts contain lycorine which causes severe gastrointestinal upset</li>
          <li><strong>Tulips:</strong> Contain tulipalin A and B, especially concentrated in bulbs</li>
          <li><strong>Chrysanthemums:</strong> Contain pyrethrins that are toxic to cats</li>
          <li><strong>Hyacinths:</strong> Similar toxins to tulips, causing irritation and potential organ damage</li>
          <li><strong>Amaryllis:</strong> Contains lycorine and other toxic alkaloids</li>
          <li><strong>Hydrangeas:</strong> Contain cyanogenic glycosides</li>
          <li><strong>Azaleas/Rhododendrons:</strong> Contain grayanotoxins affecting heart function</li>
        </ul>
      </div>
      
      <p>I've adopted a strict "better safe than sorry" approach after a friend's cat became seriously ill from lily exposure. When receiving flower arrangements as gifts, I immediately inspect them and remove any potentially toxic elements before allowing them in my home.</p>
      
      <p><strong>Emergency tip:</strong> If you suspect your cat has ingested a toxic flower or plant, contact your veterinarian or the ASPCA Animal Poison Control Center (888-426-4435) immediately. Time is crucial in treating plant toxicity.</p>

      <h2 id="faqs">Frequently Asked Questions About Cat-Safe Flowers</h2>
      
      <div className="space-y-6 my-8">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">Are roses completely safe for cats?</h3>
          <p>Yes, roses themselves are non-toxic to cats according to the ASPCA. However, the thorns can cause physical injury if stepped on or swallowed. For complete safety, trim thorns from rose stems before bringing them into your home, especially if your cat is particularly curious about plants.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">What should I do if my cat eats a flower I'm not sure about?</h3>
          <p>If your cat consumes any plant or flower you're uncertain about, it's best to contact your veterinarian immediately. Take a photo or sample of the plant with you if possible. Watch for symptoms like drooling, vomiting, lethargy, or changes in behavior, and report these to your vet. Don't wait for symptoms to worsen, as early intervention is crucial for treating plant toxicity.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">Are dried flowers safer than fresh ones for cats?</h3>
          <p>No, drying doesn't remove toxicity from flowers. A toxic fresh flower will still be toxic when dried. Additionally, dried flowers can sometimes be more brittle, creating small pieces that could be more easily ingested. Stick to cat-safe flower varieties whether they're fresh or dried.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">Can I use floral preservatives in water with cat-safe flowers?</h3>
          <p>Many commercial floral preservatives contain sugar and biocides that could cause stomach upset if a cat drinks the water. I recommend using plain, fresh water for cut flowers in cat households and changing it every 1-2 days to maintain freshness. If you do use preservatives, make sure the container is completely inaccessible to your cat.</p>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">Are artificial flowers a better option for cat households?</h3>
          <p>While artificial flowers eliminate toxicity concerns, they introduce different risks. Cats may chew on plastic or silk flowers, potentially swallowing small pieces that could cause intestinal blockages. If using artificial arrangements, ensure they're made of high-quality materials without small, detachable parts, and place them where cats are less likely to access them. I've had success with high-quality silk flowers placed on high shelves.</p>
        </div>
      </div>

      <h2 id="conclusion">Enjoying Flowers Safely in Your Cat-Friendly Home</h2>
      <p>Living with cats doesn't mean giving up the joy and beauty of fresh flowers. After years of navigating the delicate balance between feline safety and floral beauty, I've found that thoughtful selection of cat-safe varieties and strategic placement are the keys to success.</p>
      
      <p>Remember that even with non-toxic flowers, it's best to monitor your cat's behavior when introducing new plants or cut flowers to your home. Each cat has unique preferences and tendencies – some may completely ignore even the most enticing blooms, while others seem determined to investigate every new addition to their territory!</p>
      
      <p>By sticking with the beautiful, cat-safe options we've explored – roses, sunflowers, gerbera daisies, zinnias, petunias, orchids, African violets, camellias, snapdragons, and coneflowers – you can confidently enjoy gorgeous floral displays without compromising your furry friend's health and safety.</p>
      
      <div className="my-6">
        <a href="https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-throw-pillow" className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
          Shop Our Cat-Safe Sunflower Pillow Collection
        </a>
      </div>
      
      <p>What's your experience with cats and flowers? Have you discovered other cat-safe varieties that work well in your home? Share your stories and tips in the comments below!</p>
    `,
    imageSrc: '/images/blog/what-flowers-are-safe-for-cats.webp',
    date: 'May 14, 2025',
    readTime: '12 min read',
    category: 'Cat-Friendly Plants',
    author: {
      name: 'Jack Walker',
      role: 'Plant & Flower Expert',
      avatarSrc: '/author/Jack-Walker.jpg',
    },
  };

  // Generate schema directly in the component
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://flowersluxe.com/blog/${slug}`,
    },
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": `https://flowersluxe.com/${blogPost.imageSrc}`,
    "author": {
      "@type": "Person",
      "name": blogPost.author.name,
      "jobTitle": blogPost.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "FlowersLuxe",
      "logo": {
        "@type": "ImageObject",
        "url": "https://flowersluxe.com/public/images/flowersluxe-logo.png",
        "width": "112",
        "height": "112"
      }
    },
    "datePublished": new Date(blogPost.date).toISOString(),
    "dateModified": new Date(blogPost.date).toISOString(),
    "articleSection": blogPost.category,
    "timeRequired": "PT12M",
    "keywords": "cat-safe flowers, non-toxic flowers for cats, pet-friendly flowers, flowers safe for cats, cat-friendly plants, roses, sunflowers, gerbera daisies, orchids, zinnias, petunias, african violets, camellias, snapdragons, coneflowers",
    "articleBody": blogPost.excerpt,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-title", ".article-summary"]
    }
  };

  // Product schema for the related item
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Sunflower Throw Pillow - Bold Botanical Elegance",
    "image": "https://flowersluxe.com/images/products/throw-pillows/sunflower-throw-pillow-bold-botanical-elegance.webp",
    "description": "Brighten your space with a sunflower pillow featuring a detailed floral mandala. These sunflower throw pillows add charm, warmth, and nature-inspired style.",
    "brand": {
      "@type": "Brand",
      "name": "FlowersLuxe"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-throw-pillow",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  // Add smooth scrolling for anchor links
  useEffect(() => {
    // Fix for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLAnchorElement;
        const targetId = element.getAttribute('href')?.substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100, // Offset for fixed headers
              behavior: 'smooth'
            });
            
            // Update URL without refresh
            history.pushState(undefined, '', `#${targetId}`);
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>{blogPost.title} | FlowersLuxe</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={`https://flowersluxe.com${blogPost.imageSrc}`} />
        <meta property="og:url" content={`https://flowersluxe.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://flowersluxe.com/blog/${slug}`} />
      </Head>
      
      {/* Add schema markup directly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      
      {/* Add product schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      {/* Blog Post Header */}
      <section className="bg-surface-muted py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 -top-48 -right-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute w-64 h-64 bottom-0 left-1/4 bg-primary/5 rounded-full blur-2xl" />
          <div className="subtle-pattern absolute inset-0 opacity-30" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-6">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to blog</span>
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                {blogPost.category}
              </span>
            </div>
            
            <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold mb-6 article-title">
              {blogPost.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6 article-summary">
              {blogPost.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
            
            {/* Author info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={blogPost.author.avatarSrc}
                  alt={blogPost.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                /> 
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{blogPost.author.name}</h3>
                <p className="text-sm text-gray-500">{blogPost.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom">
        <div className="relative h-64 md:h-96 -mt-10 mb-12 rounded-xl overflow-hidden shadow-md">
          <Image
            src={blogPost.imageSrc}
            alt={`Collection of cat-safe flowers including roses, sunflowers, and orchids - ${blogPost.title}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <style jsx global>{`
                  .prose h2 {
                    font-size: 1.75rem !important;
                    margin-top: 2.5rem !important;
                    margin-bottom: 1rem !important;
                    font-weight: 700 !important;
                    font-family: var(--font-cormorant) !important;
                    color: #1a202c !important;
                    scroll-margin-top: 100px;
                  }
                  
                  .prose h3 {
                    scroll-margin-top: 100px;
                  }
                  
                  .prose p {
                    font-size: 1.125rem !important;
                    line-height: 1.75 !important;
                    margin-bottom: 1.5rem !important;
                  }
                  
                  .prose strong {
                    color: #1a202c !important;
                  }
                  
                  .prose ul {
                    margin-bottom: 1.5rem !important;
                  }
                  
                  .prose ol {
                    margin-bottom: 1.5rem !important;
                  }
                `}</style>
                
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </article>
              
              {/* Share */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium">Share:</span>
                  <div className="flex gap-2">
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                          'facebook-share',
                          'width=580,height=296'
                        );
                      }}
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://twitter.com/intent/tweet?text=${encodeURIComponent(blogPost.title)}&url=${encodeURIComponent(window.location.href)}`,
                          'twitter-share',
                          'width=550,height=235'
                        );
                      }}
                    >
                      <Twitter size={18} />
                    </a>
                    <a 
                      href="#"
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,
                          'linkedin-share',
                          'width=750,height=600'
                        );
                      }}
                    >
                      <Linkedin size={18} />
                    </a>
                    <button 
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Table of Contents */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Table of Contents</h3>
                  <nav aria-label="Article Table of Contents">
                    <ul className="space-y-2">
                      <li>
                        <a href="#why-cat-safe-flowers" className="text-gray-600 hover:text-primary">
                          <span>Why Cat-Safe Flowers Matter</span>
                        </a>
                      </li>
                      <li>
                        <a href="#roses" className="text-gray-600 hover:text-primary">
                          <span>1. Roses</span>
                        </a>
                      </li>
                      <li>
                        <a href="#sunflowers" className="text-gray-600 hover:text-primary">
                          <span>2. Sunflowers</span>
                        </a>
                      </li>
                      <li>
                        <a href="#gerbera-daisies" className="text-gray-600 hover:text-primary">
                          <span>3. Gerbera Daisies</span>
                        </a>
                      </li>
                      <li>
                        <a href="#zinnias" className="text-gray-600 hover:text-primary">
                          <span>4. Zinnias</span>
                        </a>
                      </li>
                      <li>
                        <a href="#petunias" className="text-gray-600 hover:text-primary">
                          <span>5. Petunias</span>
                        </a>
                      </li>
                      <li>
                        <a href="#orchids" className="text-gray-600 hover:text-primary">
                          <span>6. Orchids</span>
                        </a>
                      </li>
                      <li>
                        <a href="#african-violets" className="text-gray-600 hover:text-primary">
                          <span>7. African Violets</span>
                        </a>
                      </li>
                      <li>
                        <a href="#camellias" className="text-gray-600 hover:text-primary">
                          <span>8. Camellias</span>
                        </a>
                      </li>
                      <li>
                        <a href="#snapdragons" className="text-gray-600 hover:text-primary">
                          <span>9. Snapdragons</span>
                        </a>
                      </li>
                      <li>
                        <a href="#coneflowers" className="text-gray-600 hover:text-primary">
                          <span>10. Coneflowers</span>
                        </a>
                      </li>
                      <li>
                        <a href="#cat-friendly-arrangements" className="text-gray-600 hover:text-primary">
                          <span>Creating Cat-Friendly Arrangements</span>
                        </a>
                      </li>
                      <li>
                        <a href="#flowers-to-avoid" className="text-gray-600 hover:text-primary">
                          <span>Flowers to Avoid</span>
                        </a>
                      </li>
                      <li>
                        <a href="#faqs" className="text-gray-600 hover:text-primary">
                          <span>FAQs</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                
                {/* Save for Later Option */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <div className="flex items-center gap-3">
                    <Bookmark size={20} className="text-primary" />
                    <h3 className="font-medium">Save for later</h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 mb-4">
                    Want to remember these cat-safe flower options? Bookmark this page to come back to it later.
                  </p>
                  <button 
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    onClick={() => {
                      if (window.sidebar && window.sidebar.addPanel) { 
                        window.sidebar.addPanel(document.title, window.location.href, ''); 
                      } else if (window.external && 'AddFavorite' in window.external) { 
                        window.external.AddFavorite(window.location.href, document.title);
                      } else { 
                        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
                      }
                    }}
                  >
                    <Bookmark size={16} />
                    <span>Bookmark Page</span>
                  </button>
                </div>
                
                {/* Related Products */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-8">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Related Products</h3>
                  <div className="space-y-4">
                    <a href="https://store.flowersluxe.com/products/75001625-sunflower-mandala-vibrant-floral-boho-design-throw-pillow" className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/products/throw-pillows/sunflower-throw-pillow-bold-botanical-elegance.webp"
                          alt="Sunflower Throw Pillow - Bold Botanical Elegance"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">Sunflower Throw Pillow</h4>
                        <p className="text-sm text-gray-500">Bold Botanical Elegance</p>
                      </div>
                    </a>
                    
                    <a href="https://flowersluxe.com/custom/cat-dad-mug-unique-personalized-gift-for-cat-loving-dads" className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/blog/cat-dad-mug-personalized-cat-gifts.webp"
                          alt="Custom Cat Dad Mug"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">Custom Cat Dad Mug</h4>
                        <p className="text-sm text-gray-500">Personalized with your cat's name</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                {/* Related Posts */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-cormorant text-xl font-bold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    <a href="https://flowersluxe.com/blog/top-4-custom-cat-gifts-for-cat-lovers-personalized-unique-ideas-for-2025" className="flex items-center gap-3 group">
                      <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/blog/top-4-custom-cat-gifts-for-cat-lovers-custom-cat-pillow-and-mug-sticker-tote-bag-ersonalized-&-unique-ideas.webp"
                          alt="Top 4 Custom Cat Gifts for Cat Lovers"
                          width={64}
                          height={64}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors">Top 4 Custom Cat Gifts</h4>
                        <p className="text-sm text-gray-500">Personalized Ideas for 2025</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
