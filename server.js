const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced Chat endpoint with expanded nutrition knowledge
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const lowerMessage = message.toLowerCase();
    
    // Expanded predefined responses for many nutrition topics
    if (lowerMessage.includes('weight loss') || lowerMessage.includes('lose weight') || lowerMessage.includes('slimming') || lowerMessage.includes('burn fat')) {
      res.json({ reply: "For sustainable weight loss, focus on a balanced diet with plenty of vegetables, lean proteins, and whole grains. Aim for a moderate calorie deficit of 300-500 calories per day, and combine diet with regular exercise for best results. Include foods high in fiber to stay full longer." });
    } 
    else if (lowerMessage.includes('protein') || lowerMessage.includes('muscle') || lowerMessage.includes('bodybuilding') || lowerMessage.includes('muscle building')) {
      res.json({ reply: "Protein needs vary by activity level. Sedentary adults need about 0.8g per kg of body weight, while athletes may need 1.2-1.7g per kg. Good sources include chicken, fish, eggs, legumes, tofu, Greek yogurt, and lean meats. Distribute protein intake evenly throughout the day for optimal muscle synthesis." });
    }
    else if (lowerMessage.includes('snack') || lowerMessage.includes('healthy eat') || lowerMessage.includes('munch') || lowerMessage.includes('hungry between meals')) {
      res.json({ reply: "Healthy snack ideas: apple with peanut butter, Greek yogurt with berries, handful of almonds, carrot sticks with hummus, rice cakes with avocado, a small portion of dark chocolate (>70% cocoa), or a small smoothie with greens and protein powder." });
    }
    else if (lowerMessage.includes('meal timing') || lowerMessage.includes('when to eat') || lowerMessage.includes('eating schedule') || lowerMessage.includes('meal frequency')) {
      res.json({ reply: "Meal timing should fit your schedule. Many people do well with 3 meals and 1-2 snacks. Try to eat within an hour of waking and space meals 3-4 hours apart. Avoid eating 2-3 hours before bedtime for better sleep quality. Listen to your body's hunger cues rather than eating by clock alone." });
    }
    else if (lowerMessage.includes('diet') || lowerMessage.includes('nutrition') || lowerMessage.includes('healthy food') || lowerMessage.includes('balanced diet')) {
      res.json({ reply: "A balanced diet includes variety from all food groups: fruits, vegetables, whole grains, lean proteins, and healthy fats. Focus on whole foods rather than processed options, and remember that moderation is key for sustainable healthy eating. Aim for colorful plates with diverse nutrients." });
    }
    else if (lowerMessage.includes('carb') || lowerMessage.includes('carbohydrate') || lowerMessage.includes('energy food')) {
      res.json({ reply: "Carbohydrates are your body's main energy source. Focus on complex carbs like whole grains, oats, quinoa, sweet potatoes, and legumes rather than simple sugars. The right amount depends on your activity level - athletes need more carbs for energy while sedentary individuals may benefit from moderate intake." });
    }
    else if (lowerMessage.includes('fat') || lowerMessage.includes('oil') || lowerMessage.includes('lipid') || lowerMessage.includes('healthy fat')) {
      res.json({ reply: "Healthy fats are essential for hormone production, brain health, and vitamin absorption. Good sources include avocados, nuts, seeds, olive oil, and fatty fish like salmon. Limit saturated fats and avoid trans fats. About 20-35% of your daily calories should come from healthy fats." });
    }
    else if (lowerMessage.includes('fiber') || lowerMessage.includes('constipation') || lowerMessage.includes('digest') || lowerMessage.includes('bowel')) {
      res.json({ reply: "Fiber aids digestion and helps maintain stable blood sugar. Adults need 25-30g daily from sources like fruits, vegetables, whole grains, legumes, nuts and seeds. Increase fiber gradually and drink plenty of water to avoid discomfort. Soluble fiber (oats, apples) and insoluble fiber (whole grains, vegetables) both play important roles." });
    }
    else if (lowerMessage.includes('vitamin') || lowerMessage.includes('mineral') || lowerMessage.includes('nutrient') || lowerMessage.includes('supplement')) {
      res.json({ reply: "Essential vitamins and minerals support countless body functions. Eat a varied, colorful diet to get a broad spectrum: leafy greens for iron and folate, citrus for vitamin C, dairy for calcium, nuts for magnesium, and lean meats for B vitamins. Consider a multivitamin if you have dietary restrictions but prioritize food sources first." });
    }
    else if (lowerMessage.includes('water') || lowerMessage.includes('hydrat') || lowerMessage.includes('drink') || lowerMessage.includes('thirsty')) {
      res.json({ reply: "Proper hydration is crucial for all bodily functions. Aim for 8-10 glasses of water daily, more if you're active or in hot climates. Other hydrating options include herbal tea, infused water, and water-rich foods like cucumbers and watermelon. Monitor urine color - pale yellow indicates good hydration." });
    }
    else if (lowerMessage.includes('sugar') || lowerMessage.includes('sweet') || lowerMessage.includes('dessert') || lowerMessage.includes('added sugar')) {
      res.json({ reply: "Limit added sugars to less than 10% of daily calories (about 50g or 12 teaspoons). Natural sugars in fruits and dairy come with beneficial nutrients, but added sugars in processed foods provide empty calories. Read labels carefully - sugar has many names like sucrose, fructose, dextrose, and syrup." });
    }
    else if (lowerMessage.includes('vegetarian') || lowerMessage.includes('vegan') || lowerMessage.includes('plant based')) {
      res.json({ reply: "Well-planned vegetarian and vegan diets can be very healthy. Focus on getting complete proteins through combinations like beans and rice, include iron-rich foods like spinach and lentils with vitamin C sources to enhance absorption, and consider supplements for nutrients like B12 that are primarily found in animal products." });
    }
    else if (lowerMessage.includes('calorie') || lowerMessage.includes('energy') || lowerMessage.includes('intake') || lowerMessage.includes('energy needs')) {
      res.json({ reply: "Calorie needs vary based on age, gender, activity level, and goals. Most adults need 1600-2400 calories daily for maintenance. Use online calculators to estimate your needs, then adjust based on your goals - reduce by 300-500 for weight loss or increase by 300-500 for weight gain. Track consistently for accurate results." });
    }
    else if (lowerMessage.includes('exercise') || lowerMessage.includes('workout') || lowerMessage.includes('fitness') || lowerMessage.includes('physical activity')) {
      res.json({ reply: "Combine cardiovascular exercise, strength training, and flexibility work for optimal health. Aim for 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity weekly, plus strength training twice weekly. Fuel workouts with a balanced meal 2-3 hours beforehand or a small snack 30-60 minutes prior." });
    }
    else if (lowerMessage.includes('recipe') || lowerMessage.includes('cook') || lowerMessage.includes('meal idea') || lowerMessage.includes('food preparation')) {
      res.json({ reply: "Try these simple healthy recipes: 1) Sheet pan chicken with vegetables - toss chicken breast, bell peppers, broccoli and sweet potatoes with olive oil and roast. 2) Quinoa bowl with black beans, corn, avocado and salsa. 3) Overnight oats with Greek yogurt, berries and nuts. 4) Stir-fried tofu with mixed vegetables and brown rice." });
    }
    else if (lowerMessage.includes('breakfast') || lowerMessage.includes('morning meal') || lowerMessage.includes('first meal')) {
      res.json({ reply: "A balanced breakfast includes protein, complex carbs, and healthy fats. Good options: Greek yogurt with berries and nuts, scrambled eggs with whole grain toast, oatmeal with peanut butter and banana, or a smoothie with protein powder, spinach and fruit. Breakfast helps regulate blood sugar and prevents overeating later." });
    }
    else if (lowerMessage.includes('lunch') || lowerMessage.includes('midday') || lowerMessage.includes('noon meal')) {
      res.json({ reply: "Ideal lunches combine lean protein, complex carbs, and vegetables. Try: Salad with grilled chicken, quinoa, and varied veggies; whole grain wrap with hummus and vegetables; leftovers from a healthy dinner; or soup and sandwich combo. Prepare lunch ahead to avoid unhealthy last-minute choices." });
    }
    else if (lowerMessage.includes('dinner') || lowerMessage.includes('evening meal') || lowerMessage.includes('supper')) {
      res.json({ reply: "Dinner should be satisfying but not overly heavy. Good options: baked salmon with roasted vegetables and quinoa; stir-fry with lean protein and brown rice; chili with lean ground turkey and beans; or whole wheat pasta with marinara sauce and a side salad. Finish eating 2-3 hours before bedtime for better sleep." });
    }
    else if (lowerMessage.includes('gluten') || lowerMessage.includes('celiac') || lowerMessage.includes('wheat allergy')) {
      res.json({ reply: "Gluten-free diets are essential for those with celiac disease or gluten sensitivity. Naturally gluten-free foods include fruits, vegetables, meat, fish, eggs, dairy, legumes, nuts, and grains like rice, quinoa, and corn. Read labels carefully as gluten is hidden in many processed foods. Ensure balanced nutrition when eliminating gluten-containing grains." });
    }
    else if (lowerMessage.includes('dairy') || lowerMessage.includes('lactose') || lowerMessage.includes('milk allergy')) {
      res.json({ reply: "Dairy provides calcium, vitamin D, and protein but some people are lactose intolerant or avoid it for other reasons. Alternatives include almond milk, soy milk, oat milk, and coconut yogurt. Ensure you get enough calcium from other sources like leafy greens, fortified plant milks, almonds, and canned fish with bones." });
    }
    else if (lowerMessage.includes('diet chart') || lowerMessage.includes('meal plan') || lowerMessage.includes('diet plan')) {
      res.json({ reply: "I can help you create a personalized diet chart! Please provide your age, weight, height, activity level, and health goals. Generally, a balanced plan includes: Breakfast (7-8 AM): Protein + Complex carbs + Healthy fats, Lunch (12-1 PM): Lean protein + Vegetables + Whole grains, Dinner (6-7 PM): Lighter meal with protein and vegetables, and 1-2 healthy snacks as needed." });
    }
    else {
      // For questions outside the predefined topics
      res.json({ reply: "I specialize in nutrition and diet advice. You can ask me about weight management, macronutrients (protein, carbs, fats), meal planning, vitamins and minerals, hydration, special diets, healthy recipes, or eating schedules. What specific nutrition topic would you like to know about?" });
    }
  } catch (error) {
    console.error('Error:', error);
    res.json({ reply: "I'm having trouble connecting to my knowledge base right now. Please try again later." });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Dietitian API is running' });
});

app.listen(port, () => {
  console.log(`Dietitian backend server running on port ${port}`);
});