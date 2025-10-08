import { Article, AffiliateProduct, ArticleCategory, ArticleOccasion } from './types'

// Sample affiliate products (we'll expand this as needed)
export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 'cerave-cleanser',
    name: 'Hydrating Facial Cleanser',
    brand: 'CeraVe',
    price: '$18',
    priceValue: 18,
    image: '/images/Image 11 (1).jpeg',
    description: 'Gentle, non-foaming cleanser with ceramides and hyaluronic acid. Perfect for all skin types.',
    affiliateLink: 'https://www.amazon.com/CeraVe-Hydrating-Facial-Cleanser-Washing/dp/B01MSSDEPK?&linkCode=ll1&tag=elevatedgent-20',
    retailer: 'Amazon',
    tier: 'budget'
  },
  {
    id: 'kiehls-facial-fuel',
    name: 'Facial Fuel Moisturizer',
    brand: "Kiehl's",
    price: '$36',
    priceValue: 36,
    image: '/images/Image 12 (1).jpeg',
    description: 'Energizing moisturizer with caffeine and vitamin E. Matte finish, perfect for daily use.',
    affiliateLink: 'https://www.kiehls.com/skincare/mens-skincare/facial-fuel-energizing-moisture-treatment-for-men/622.html',
    retailer: 'Kiehl\'s',
    tier: 'signature'
  },
  {
    id: 'lamer-moisturizer',
    name: 'The Moisturizing Cream',
    brand: 'La Mer',
    price: '$195',
    priceValue: 195,
    image: '/images/Image 13 (1).jpeg',
    description: 'Luxury cream with Miracle Broth. Intense hydration and visible anti-aging benefits.',
    affiliateLink: 'https://www.nordstrom.com/s/la-mer-the-moisturizing-cream/2910329',
    retailer: 'Nordstrom',
    tier: 'upgrade'
  }
]

// Main articles data - 3 grooming articles
export const articles: Article[] = [
  {
    id: 'essential-grooming-routine',
    slug: 'essential-grooming-routine',
    title: 'The Essential Grooming Routine Every Man Needs',
    excerpt: 'Build a solid grooming foundation with this simple 5-step routine. From cleansing to SPF, we cover the essentials that every gentleman should master—regardless of budget or style.',
    category: 'blueprint',

    heroImage: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=1200&h=675&fit=crop',
    content: `
      <h2>Why Grooming Matters</h2>
      <p>Great style starts with great grooming. You can wear the most expensive clothes, but if your skin looks dull or your hair is unkempt, the overall effect suffers. Think of grooming as the foundation of your personal style—everything else builds on it.</p>

      <p>The good news? You don't need a 15-step Korean skincare routine or hundreds of dollars in products. A simple, consistent 5-step routine is all it takes to look polished and put-together.</p>

      <h2>The 5-Step Morning Routine</h2>

      <h3>Step 1: Cleanse</h3>
      <p>Start with a gentle facial cleanser to remove overnight oils and prep your skin. Use lukewarm water (not hot—it strips natural oils) and massage the cleanser in circular motions for 30-60 seconds.</p>

      <p><strong>Pro tip:</strong> If you have oily skin, use a foaming cleanser. Dry skin? Go for a cream or oil-based formula.</p>

      <h3>Step 2: Tone (Optional)</h3>
      <p>If you have oily or acne-prone skin, a toner can help balance your pH and tighten pores. Apply with a cotton pad or pat directly onto skin. If you have normal or dry skin, you can skip this step.</p>

      <h3>Step 3: Moisturize</h3>
      <p>Non-negotiable. Every skin type needs moisture, even oily skin. A good moisturizer hydrates without clogging pores and creates a smooth base for the rest of your day.</p>

      <p>Apply while your skin is still slightly damp to lock in moisture. Use upward motions and don't forget your neck.</p>

      <h3>Step 4: SPF</h3>
      <p>The single most important anti-aging step. Use SPF 30+ daily, even on cloudy days or when you're indoors (UVA rays penetrate windows). This prevents sun damage, wrinkles, and dark spots.</p>

      <p>Many moisturizers include SPF, which can streamline your routine to 4 products.</p>

      <h3>Step 5: Style Your Hair</h3>
      <p>Choose a product based on your hair type and desired finish. For a natural look, use a light cream or sea salt spray. For more hold, go with a pomade or wax.</p>

      <p>Less is more—start with a small amount and add more if needed.</p>

      <h2>Evening Routine</h2>
      <p>Keep it simple at night:</p>
      <ul>
        <li><strong>Cleanse</strong> to remove the day's dirt and oil</li>
        <li><strong>Moisturize</strong> to repair overnight</li>
        <li><strong>Optional:</strong> Use a night serum or retinol for anti-aging (if you're 30+)</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>Using body soap on your face (too harsh)</li>
        <li>Skipping SPF (biggest regret later)</li>
        <li>Over-washing (strips natural oils, causes more oil production)</li>
        <li>Not being consistent (results take 4-6 weeks)</li>
      </ul>

      <h2>Product Recommendations</h2>
      <p>Below are our curated picks at three price points. All work equally well—choose based on your budget.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Consistency beats perfection—stick to 5 products daily</li>
        <li>Invest in SPF above all else</li>
        <li>Start with budget options, upgrade as you learn your skin</li>
        <li>Give any new routine 4-6 weeks before judging results</li>
        <li>Less is more—don't overcomplicate it</li>
      </ul>
    `,

    author: 'The Elevated Gentleman',
    publishDate: '2025-01-15',
    readTime: 8,
    tags: ['grooming basics', 'skincare', 'morning routine', 'beginner friendly'],
    featured: true,

    affiliateProducts: {
      budget: affiliateProducts.find(p => p.id === 'cerave-cleanser'),
      signature: affiliateProducts.find(p => p.id === 'kiehls-facial-fuel'),
      upgrade: affiliateProducts.find(p => p.id === 'lamer-moisturizer')
    },

    seo: {
      metaTitle: 'Essential Men\'s Grooming Routine: 5 Simple Steps | The Elevated Gentleman',
      metaDescription: 'Master the basics with our essential grooming routine for men. Simple 5-step process with product recommendations at every budget level.',
      keywords: ['mens grooming routine', 'skincare for men', 'basic grooming', 'mens facial care', 'daily grooming'],
      ogImage: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=1200&h=675&fit=crop'
    }
  },

  {
    id: 'beard-care-guide',
    slug: 'complete-beard-care-guide',
    title: 'The Complete Beard Care Guide: From Stubble to Full Beard',
    excerpt: 'Master the art of beard grooming with our comprehensive guide. Learn proper washing, trimming, styling, and maintenance techniques for every beard length and style.',
    category: 'blueprint',

    heroImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=1200&h=675&fit=crop',
    content: `
      <h2>Why Beard Care Matters</h2>
      <p>A well-groomed beard is the difference between looking rugged and looking unkempt. Whether you're sporting stubble or a full beard, proper maintenance is essential for both appearance and skin health.</p>

      <p>The right beard care routine prevents itchiness, beardruff (beard dandruff), patchy growth, and keeps your facial hair soft, shaped, and presentable.</p>

      <h2>The Foundation: Washing Your Beard</h2>
      <p>Your beard needs different care than your face. Regular shampoo is too harsh and strips natural oils.</p>

      <h3>Washing Frequency</h3>
      <ul>
        <li><strong>Stubble (1-3mm):</strong> Wash with face cleanser daily</li>
        <li><strong>Short beard (3-12mm):</strong> Use beard wash 3-4 times per week</li>
        <li><strong>Medium to long beard (12mm+):</strong> Use beard wash 2-3 times per week</li>
      </ul>

      <p>Over-washing strips natural oils that keep your beard soft. On non-wash days, rinse with water and apply beard oil.</p>

      <h3>How to Wash</h3>
      <ol>
        <li>Wet beard with warm (not hot) water</li>
        <li>Apply small amount of beard wash</li>
        <li>Massage into beard and skin underneath</li>
        <li>Rinse thoroughly</li>
        <li>Pat dry—never rub</li>
      </ol>

      <h2>Conditioning and Oil: Keep It Soft</h2>
      <p>Beard oil is non-negotiable. It moisturizes skin, prevents itching, adds shine, and makes your beard more manageable.</p>

      <h3>How to Apply Beard Oil</h3>
      <ol>
        <li>Apply to damp beard (not soaking wet)</li>
        <li>Use 3-5 drops for short beards, 6-10 for longer</li>
        <li>Rub between palms to warm</li>
        <li>Massage into skin first, then distribute through beard</li>
        <li>Use a beard brush or comb to distribute evenly</li>
      </ol>

      <p><strong>When to use:</strong> Daily, after washing or showering</p>

      <h3>Beard Balm vs. Oil</h3>
      <p>Beard balm provides hold and styling in addition to conditioning. Use balm for longer beards that need shaping, or in dry/cold weather for extra protection.</p>

      <h2>Trimming and Shaping</h2>
      <p>Even if you're growing your beard out, regular trimming is essential for shape and health.</p>

      <h3>Tools You Need</h3>
      <ul>
        <li><strong>Quality beard trimmer</strong> with multiple guard lengths</li>
        <li><strong>Sharp scissors</strong> for detail work</li>
        <li><strong>Beard comb</strong> with both wide and fine teeth</li>
        <li><strong>Beard brush</strong> with natural boar bristles</li>
      </ul>

      <h3>Trimming Guidelines</h3>
      <p><strong>Neck line:</strong> Two fingers above your Adam's apple. Trim everything below this line.</p>
      <p><strong>Cheek line:</strong> Natural growth pattern, but clean up stragglers above the line.</p>
      <p><strong>Mustache:</strong> Trim just below the lip line so it doesn't interfere with eating.</p>
      <p><strong>Length maintenance:</strong> Trim every 2-3 weeks to maintain shape and remove split ends.</p>

      <h2>Daily Maintenance Routine</h2>
      <p>A 2-minute routine that makes all the difference:</p>

      <ol>
        <li><strong>Morning:</strong> Apply beard oil, brush or comb to style</li>
        <li><strong>After eating:</strong> Quick check for food particles</li>
        <li><strong>Evening:</strong> Brush before bed to train growth direction</li>
      </ol>

      <h2>Common Beard Problems (And Solutions)</h2>

      <h3>Itchy Beard</h3>
      <p><strong>Cause:</strong> Dry skin underneath, new growth, or infrequent washing</p>
      <p><strong>Solution:</strong> Use beard oil daily, exfoliate skin underneath weekly</p>

      <h3>Beardruff</h3>
      <p><strong>Cause:</strong> Dry skin, not enough conditioning</p>
      <p><strong>Solution:</strong> Increase beard oil use, brush daily to distribute natural oils</p>

      <h3>Patchy Growth</h3>
      <p><strong>Cause:</strong> Genetics, age, trimming too early</p>
      <p><strong>Solution:</strong> Give it 8-12 weeks before judging. Longer hair covers patches. Consider minoxidil if severe.</p>

      <h3>Wiry, Coarse Texture</h3>
      <p><strong>Cause:</strong> Natural beard texture, lack of conditioning</p>
      <p><strong>Solution:</strong> Daily beard oil, weekly deep conditioning treatment, use beard brush to train hair</p>

      <h2>Product Recommendations</h2>
      <p>You don't need 20 products. Start with these essentials:</p>

      <ul>
        <li><strong>Beard wash:</strong> Gentle cleanser designed for facial hair (not regular shampoo)</li>
        <li><strong>Beard oil:</strong> Jojoba or argan oil base with natural scents</li>
        <li><strong>Beard brush:</strong> Boar bristle brush for distribution and training</li>
        <li><strong>Quality trimmer:</strong> Multiple guard lengths, rechargeable battery</li>
      </ul>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Wash 2-4 times per week (depending on length)</li>
        <li>Apply beard oil daily to damp beard</li>
        <li>Brush daily to distribute oils and train growth</li>
        <li>Trim neckline and cheek lines every 2-3 weeks</li>
        <li>Give new beards 8-12 weeks before judging growth</li>
        <li>Invest in quality tools—they last years</li>
      </ul>
    `,

    author: 'The Elevated Gentleman',
    publishDate: '2025-01-20',
    readTime: 10,
    tags: ['beard care', 'beard grooming', 'facial hair', 'beard oil', 'trimming'],
    featured: false,

    seo: {
      metaTitle: 'Complete Beard Care Guide: Washing, Trimming & Styling | The Elevated Gentleman',
      metaDescription: 'Master beard grooming from stubble to full beard. Learn washing frequency, oil application, trimming techniques, and solutions to common beard problems.',
      keywords: ['beard care', 'beard grooming', 'how to groom beard', 'beard oil guide', 'beard trimming'],
      ogImage: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=1200&h=675&fit=crop'
    }
  },

  {
    id: 'hair-styling-guide',
    slug: 'modern-mens-hair-styling-guide',
    title: 'Modern Men\'s Hair Styling: Find Your Perfect Look',
    excerpt: 'From classic cuts to contemporary styles, discover the best haircut and styling routine for your face shape, hair type, and lifestyle. Plus, product recommendations for every style.',
    category: 'blueprint',

    heroImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&h=675&fit=crop',
    content: `
      <h2>Why Your Haircut Matters</h2>
      <p>Your hair is one of the first things people notice. A great haircut can enhance your facial features, project confidence, and complete your overall style—whether you're wearing a suit or streetwear.</p>

      <p>The key is finding a style that works with your natural hair type, complements your face shape, and fits your lifestyle. This guide will help you identify the right cut and maintain it.</p>

      <h2>Identifying Your Face Shape</h2>
      <p>Your face shape determines which haircuts will look best. Stand in front of a mirror and pull your hair back to identify your shape:</p>

      <h3>Oval Face</h3>
      <p><strong>Characteristics:</strong> Forehead slightly wider than chin, balanced proportions</p>
      <p><strong>Best styles:</strong> Almost any style works. Try pompadours, quiffs, textured crops, or side parts</p>

      <h3>Square Face</h3>
      <p><strong>Characteristics:</strong> Strong jawline, similar width at forehead and jaw</p>
      <p><strong>Best styles:</strong> Longer on top to add height. Try textured quiffs, pompadours, or side-swept styles</p>
      <p><strong>Avoid:</strong> Flat tops, buzz cuts that emphasize jaw width</p>

      <h3>Round Face</h3>
      <p><strong>Characteristics:</strong> Similar length and width, soft angles</p>
      <p><strong>Best styles:</strong> Height on top, shorter on sides. Try high fades, quiffs, or angular fringes</p>
      <p><strong>Avoid:</strong> Bowl cuts or styles that add width at the sides</p>

      <h3>Oblong/Rectangle Face</h3>
      <p><strong>Characteristics:</strong> Longer than it is wide, high forehead</p>
      <p><strong>Best styles:</strong> Medium length with volume at sides. Try textured crops, side parts, or fringes</p>
      <p><strong>Avoid:</strong> Very short sides or excessive top height</p>

      <h3>Diamond Face</h3>
      <p><strong>Characteristics:</strong> Narrow forehead and chin, wide cheekbones</p>
      <p><strong>Best styles:</strong> Textured quiffs, side parts, or styles with some fringe</p>
      <p><strong>Avoid:</strong> Very short sides that emphasize cheekbone width</p>

      <h2>Popular Styles for 2025</h2>

      <h3>The Textured Crop</h3>
      <p><strong>Best for:</strong> Most face shapes, all hair types</p>
      <p><strong>Maintenance:</strong> Trim every 4-6 weeks</p>
      <p><strong>Styling:</strong> Apply sea salt spray or light pomade to damp hair, mess with fingers, air dry</p>
      <p>A modern, effortless look with short to medium length on top and faded sides. Works for casual and business settings.</p>

      <h3>The Modern Pompadour</h3>
      <p><strong>Best for:</strong> Oval, square faces; thick or medium hair</p>
      <p><strong>Maintenance:</strong> Trim every 3-4 weeks</p>
      <p><strong>Styling:</strong> Apply pomade to damp hair, blow dry upward and back, finish with fingers or comb</p>
      <p>Classic with a modern twist. Volume on top, shorter on sides. Sophisticated but not overly formal.</p>

      <h3>The Clean Fade</h3>
      <p><strong>Best for:</strong> Round, square faces; all hair types</p>
      <p><strong>Maintenance:</strong> Trim every 2-3 weeks for sharp lines</p>
      <p><strong>Styling:</strong> Minimal product, just a light cream or natural hold</p>
      <p>Low-maintenance with maximum impact. Skin fade or taper on sides, slightly longer on top. Perfect for athletes or minimalists.</p>

      <h3>The Side Part</h3>
      <p><strong>Best for:</strong> Oval, oblong faces; straight or wavy hair</p>
      <p><strong>Maintenance:</strong> Trim every 4-5 weeks</p>
      <p><strong>Styling:</strong> Comb through with medium-hold pomade, part on side, sleek finish</p>
      <p>Timeless professional look. Works best for business or formal settings.</p>

      <h3>The Long Textured Style</h3>
      <p><strong>Best for:</strong> Oval, oblong faces; wavy or curly hair</p>
      <p><strong>Maintenance:</strong> Trim every 6-8 weeks</p>
      <p><strong>Styling:</strong> Apply leave-in conditioner and sea salt spray, scrunch, air dry</p>
      <p>Effortless, artistic vibe. Requires confidence and the right setting (creative fields, casual environments).</p>

      <h2>Understanding Your Hair Type</h2>

      <h3>Straight Hair</h3>
      <p><strong>Advantages:</strong> Easy to style, holds shape well</p>
      <p><strong>Challenges:</strong> Can look flat without volume products</p>
      <p><strong>Best products:</strong> Light pomades, sea salt sprays, matte clays</p>

      <h3>Wavy Hair</h3>
      <p><strong>Advantages:</strong> Natural texture and volume</p>
      <p><strong>Challenges:</strong> Can become frizzy in humidity</p>
      <p><strong>Best products:</strong> Creams, curl enhancers, light gels</p>

      <h3>Curly Hair</h3>
      <p><strong>Advantages:</strong> Natural volume and character</p>
      <p><strong>Challenges:</strong> Prone to dryness and shrinkage</p>
      <p><strong>Best products:</strong> Leave-in conditioners, curl creams, defining gels</p>

      <h3>Thick Hair</h3>
      <p><strong>Advantages:</strong> Volume and body</p>
      <p><strong>Challenges:</strong> Can be difficult to manage</p>
      <p><strong>Best products:</strong> Strong-hold pomades, texturizing pastes</p>

      <h3>Thin/Fine Hair</h3>
      <p><strong>Advantages:</strong> Easy to style, dries quickly</p>
      <p><strong>Challenges:</strong> Lacks volume</p>
      <p><strong>Best products:</strong> Volumizing mousses, light clays, sea salt sprays</p>

      <h2>Daily Styling Routine</h2>

      <h3>Step 1: Start with Clean Hair</h3>
      <p>Wash hair every 2-3 days (not daily—strips natural oils). Use a quality shampoo and conditioner suited to your hair type.</p>

      <h3>Step 2: Towel Dry</h3>
      <p>Pat dry—never rub vigorously. Leave slightly damp for product application.</p>

      <h3>Step 3: Apply Product</h3>
      <p>Start with a small amount (pea to dime-sized). You can always add more. Warm between palms, then distribute evenly.</p>

      <h3>Step 4: Style</h3>
      <ul>
        <li><strong>Air dry:</strong> For natural, textured looks</li>
        <li><strong>Blow dry:</strong> For volume and structured styles (use medium heat)</li>
        <li><strong>Fingers:</strong> For casual, messy styles</li>
        <li><strong>Comb:</strong> For sleek, classic styles</li>
      </ul>

      <h2>Product Guide</h2>

      <h3>Pomade</h3>
      <p><strong>Use for:</strong> Classic styles, side parts, pompadours</p>
      <p><strong>Finish:</strong> Shine to medium shine</p>
      <p><strong>Hold:</strong> Medium to strong</p>

      <h3>Matte Clay</h3>
      <p><strong>Use for:</strong> Textured, messy styles</p>
      <p><strong>Finish:</strong> Matte, natural</p>
      <p><strong>Hold:</strong> Medium to strong</p>

      <h3>Sea Salt Spray</h3>
      <p><strong>Use for:</strong> Beach waves, texture, volume</p>
      <p><strong>Finish:</strong> Natural, slightly matte</p>
      <p><strong>Hold:</strong> Light</p>

      <h3>Hair Cream</h3>
      <p><strong>Use for:</strong> Wavy or curly hair, natural looks</p>
      <p><strong>Finish:</strong> Low shine</p>
      <p><strong>Hold:</strong> Light to medium</p>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Using too much product</strong> - Start small, add more if needed</li>
        <li><strong>Washing daily</strong> - Strips natural oils, causes dryness</li>
        <li><strong>Skipping regular trims</strong> - Even if growing out, trim every 6-8 weeks</li>
        <li><strong>Wrong products for hair type</strong> - Heavy products on thin hair = greasy look</li>
        <li><strong>Not communicating with barber</strong> - Bring reference photos, be specific</li>
      </ul>

      <h2>Finding the Right Barber</h2>
      <p>A good barber is worth their weight in gold. Look for:</p>
      <ul>
        <li>Consistent positive reviews</li>
        <li>Portfolio showing styles you like</li>
        <li>Good communication and consultation</li>
        <li>Understanding of different hair types</li>
        <li>Clean, professional shop</li>
      </ul>

      <p>Once you find the right barber, stick with them. They'll learn your hair and refine your cut over time.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Identify your face shape to choose flattering cuts</li>
        <li>Work with your natural hair type, not against it</li>
        <li>Invest in 2-3 quality products suited to your style</li>
        <li>Wash every 2-3 days, not daily</li>
        <li>Get regular trims to maintain shape (every 3-6 weeks)</li>
        <li>Communication with your barber is key—bring photos</li>
        <li>Less product is more—you can always add more</li>
      </ul>
    `,

    author: 'The Elevated Gentleman',
    publishDate: '2025-01-22',
    readTime: 12,
    tags: ['hair styling', 'mens haircuts', 'hair products', 'barbering', 'grooming'],
    featured: true,

    seo: {
      metaTitle: 'Modern Men\'s Hair Styling Guide: Cuts & Products for Every Face Shape | The Elevated Gentleman',
      metaDescription: 'Find your perfect haircut based on face shape and hair type. Complete guide to modern men\'s hairstyles, daily styling routines, and product recommendations.',
      keywords: ['mens hairstyles', 'haircuts for men', 'hair styling guide', 'mens hair products', 'face shape haircuts'],
      ogImage: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&h=675&fit=crop'
    }
  }
]

// Helper functions
export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter(article => article.category === category)
}

export function getArticlesByOccasion(occasion: ArticleOccasion): Article[] {
  return articles.filter(article => article.occasion === occasion)
}

export function getFeaturedArticles(): Article[] {
  return articles.filter(article => article.featured)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug)
}

export function getAllArticles(): Article[] {
  return articles
}
