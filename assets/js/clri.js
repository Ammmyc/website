// ===== STORY DATA =====
const stories = [
  {
    id: 'nanda', name: 'Nanda Maya G.', ethnicity: 'Nepali', partner: 'HKCS', icon: '🌾',
    theme: 'Running Free',
    quote: '"Running barefoot with my friends, I was the winner most of the time, because I was very agile."',
    stages: ['Childhood', 'Adolescence', 'Adulthood', 'Late Adulthood'],
    sections: [
      { title: 'Childhood', body: 'Running with my friends was one of the things I enjoyed doing in my childhood. Living in a village near the farmland, we used to run barefoot on a big, grassy land close to our home. Though I usually wore my brother\'s clothes, I remember I was the winner most of the time because I was very agile.' },
      { title: 'Caring for Buffalos', body: 'Being able to deal with different situations alone in my childhood was one of the things I was proud of. Part of my routine was taking the buffalos to the forest at 10 a.m. and bringing them back around 4–5 p.m. There was a time when I was hit by one of them, but I was able to take care of myself alone, and continue to look after them. Now in Hong Kong, looking back, I feel proud.' },
      { title: 'Hong Kong with My Family', body: 'When I was 35, we moved to Hong Kong with our two kids. Having a lot of support from my husband, I found no difficulties adjusting. Both of my kids are adults now, and it was lovely to see them grow up without any illness.' }
    ],
    interview: '12/5/2025 · interviewed by HKCS team'
  },
  {
    id: 'harsha', name: 'Harsha Kumari', ethnicity: 'Nepali', partner: 'HKCS', icon: '🌿',
    theme: 'Growing Up on the Farm',
    quote: '"Stepping on farm soil almost every single day, playing with the neighbours\' children—I felt at peace."',
    stages: ['Childhood', 'Adulthood', 'Hong Kong'],
    sections: [
      { title: 'Rural Nepal', body: 'I was born in Hong Kong, but I spent my childhood in rural Nepal. My father got a promotion in the military, so we had to move back. Life in Nepal was simple and joyful. I remember stepping on farm soil almost every single day, playing with the neighbours\' children day in and day out.' },
      { title: 'Playing with My Brother', body: 'The family farm was where I felt at peace. Day after day, my brother and I had to take out the cows. While they grazed, we would play tag, weaving between cows and barns. Those memories of laughter on the farm have never faded.' }
    ],
    interview: 'HKCS · 2025'
  },
  {
    id: 'kamal', name: 'Kamal', ethnicity: 'Nepali', partner: 'HKCS', icon: '🍫',
    theme: 'Sweet Childhood Memories',
    quote: '"We were always happy to meet each other and engage in fun activities together."',
    stages: ['Childhood', 'School Days'],
    sections: [
      { title: 'Sweets and Friendship', body: 'During that time, every child and person around us had a good nature and was always friendly. Under my mom\'s guidance, we would make sweets together. The most popular one involved melting chocolate and adding peanuts. I enjoyed it so much that I quickly ate all of it since it was the result of my effort.' },
      { title: 'Sports Day', body: 'I recall an outdoor activity I thoroughly enjoyed. We looked forward to our sports day every year, and one of my favourite games was placing a spoon handle in our mouths and carrying a lemon on the spoon. It was tiring, but I felt extremely delighted.' }
    ],
    interview: 'HKCS · 2025'
  },
  {
    id: 'limbuni', name: 'Limbuni Gaumaya', ethnicity: 'Nepali', partner: 'HKCS', icon: '👯',
    theme: 'Friends in the City',
    quote: '"Even though I do not know how to call them, they would call me frequently—we maintained regular contact."',
    stages: ['Childhood', 'Adolescence', 'Hong Kong'],
    sections: [
      { title: 'Childhood Hunger and Joy', body: 'When I was 6 to 7 years old, there was no school, and I would play and take care of the kettles. Most of the time, I was hungry before eating the meals, so I would just grab them and eat whenever they were prepared. Though I could not remember exactly how they tasted, I am sure that they were delicious.' },
      { title: 'Working in the Field', body: 'During my adolescence, I enjoyed working and playing in the field with my friends. We played and worked in a group of 6, sometimes 12 or even 20. It was fun to work in the field, even though sometimes it was raining heavily. My friends and I used to play with water and mud there.' },
      { title: 'Hong Kong Community', body: 'Around 4 years ago, I was living in Jordan. I had many friends in this area—Krishna Kumari, Putrani, Almaya, Asarmati, and Manmaya. We used to walk together at 7 a.m., have lunch, and walk again at 4 to 5 p.m. Though two have passed away and I no longer live there, I still remember how cheerful I was around them.' }
    ],
    interview: 'HKCS · interviewed by HO, Sing Hymn'
  },
  {
    id: 'phulmaya', name: 'Phulmaya', ethnicity: 'Nepali', partner: 'HKCS', icon: '✍️',
    theme: 'A Boy in the Body of a Girl',
    quote: '"My mother said I was a boy in the body of a girl, due to my boyish behaviour."',
    stages: ['Childhood', 'School', 'Writing Life'],
    sections: [
      { title: 'A Wild Child', body: 'I was born in Hong Kong and moved to Singapore when I was five. My father was a captain. I was a wild, tomboyish child. I was often naughty and my mother would beat me. Once, I got angry, so I threatened to jump from a tree, which scared her enough to stop. My mother said I was a boy in the body of a girl.' },
      { title: 'Education', body: 'It was very rare for girls to go to school back then, and I was one of the few girls in my class. My mother was originally against it, but my father insisted everyone should get an education. I was grateful—because of my education I was able to express myself creatively. I enjoyed writing poems and songs, and I had even written a novel.' }
    ],
    interview: 'HKCS · 2025'
  },
  {
    id: 'dhanmati', name: 'Dhan Mati', ethnicity: 'Nepali', partner: 'HKSKH', icon: '🤝',
    theme: 'Friends Connected, Bonded Together',
    quote: '"Sathi sathi Badhiyko—Friends connected, bonded together. I never feel lonely."',
    stages: ['Childhood', 'Adulthood', 'Hong Kong'],
    sections: [
      { title: 'Mud Games and Mothers', body: 'I grew up in a modest rural family. At five, I loved running to the fields with friends—not to work, but to play in the mud. Once, my mom was so angry she slapped me and told me to stop, but I kept playing because the happiness with my friends made it worth any scolding.' },
      { title: 'Marriage at Seventeen', body: 'At seventeen, my mom arranged my marriage to a man in a village three hours away. After marrying, I learned his first wife had died, leaving five young children. I took on a mother\'s role, feeling overwhelmed. Thankfully, my husband was understanding and supported me.' },
      { title: 'Yuen Long Park', body: 'At seventy-one, two daughters brought me to Hong Kong for a fresh start. We lived in Yuen Long, where I\'d exercise in Yuen Long Park each morning. I recognised people from my hometown by their clothes and jewellery, and we bonded like family. I named this scene in Nepali—"Sathi sathi Badhiyko"—Friends connected, bonded together. I look forward to going there every day.' }
    ],
    interview: '12/5/2025 · interviewed by Sue'
  },
  {
    id: 'hom', name: 'Hom Kumari L.', ethnicity: 'Nepali', partner: 'HKSKH', icon: '🌸',
    theme: 'A Life in Bloom',
    quote: '"Embracing a simple yet joyful life, dressed in new clothes and never hungry."',
    stages: ['Childhood', 'School', 'Marriage'],
    sections: [
      { title: 'Modest Beginnings', body: 'I was born into a modest rural family—the middle child among two older brothers, a younger sister, and a youngest brother. At that time, a single school served multiple villages with limited spaces, so only the boys in our family attended.' },
      { title: 'Gonggi Game', body: 'At five, I delighted in the Gonggi game with village friends, dressed in new clothes and never hungry, embracing a simple yet joyful life. Between ages five and ten, we traced our names in the sand and learned household duties. By age ten, my father taught me to write with a pencil—mistakes earned a gentle tap on the hand.' }
    ],
    interview: 'HKSKH · 2025'
  },
  {
    id: 'shakuntala', name: 'Shakuntala', ethnicity: 'Indian', partner: 'HKSKH', icon: '📜',
    theme: 'Viewing Myself Through the Lifeline',
    quote: '"Memories began to surface—some made me smile, while others gave me pause."',
    stages: ['Daughter', 'Mother', 'Reflection'],
    sections: [
      { title: 'Drawing the Lifeline', body: 'At the beginning, the facilitator invited me to draw my lifeline. As I picked up the pen, memories began to surface—some made me smile, while others gave me pause. I started assigning scores to these events, with 10 being the highest, marking their emotional weight.' },
      { title: 'Joy and Loss in the Same Year', body: 'Around 20, I got married and moved to Hong Kong. Soon after, my eldest daughter was born. Around 8 years later, I gave birth to my son—but the following year, my mother passed away. My heart was torn between happiness and grief as my joyful life came crashing down in a moment.' },
      { title: 'Building My Own House', body: 'Between 1994 and 1995, I built my first house in my hometown—a time of genuine happiness. From ages 40 to 45, while my husband stayed in Hong Kong, I cared for my son and the house alone. The house had some trouble, and I needed to fix the problems by myself.' }
    ],
    interview: 'HKSKH · 2025'
  },
  {
    id: 'ann', name: 'Ann', ethnicity: 'Thai', partner: 'Thai', icon: '💛',
    theme: 'My Life Filled with Gratitude',
    quote: '"If God places challenges in my path, I\'ll surround them with love and joy to melt them away."',
    stages: ['Thailand', 'Marriage', 'Hong Kong', 'Family'],
    sections: [
      { title: 'A Life Full of Love', body: 'I grew up in a comfortable family with my younger sister, cherished by our loving parents. From birth to age 23, I\'d give my life a 9 out of 10. After graduating, I helped at home, free from parental pressure, living a joyful and relaxed life.' },
      { title: 'Meeting My Husband at the Airport', body: 'At 23, while picking up a friend at the Thai airport, a Hong Kong man asked me for directions. That man became my husband. After two years of dating, we decided to marry. I returned to Thailand to pack and move to Hong Kong, but I didn\'t tell my parents about the marriage until I reached the airport—fearing my father would push for his friend\'s son. This still makes me feel a bit guilty.' },
      { title: 'Embracing Challenges', body: 'I dislike black, as it represents negative things. My life is full of colour, and I don\'t want black in it. But if God places challenges in my path, I\'ll face them positively, surrounding difficulties with love and joy to melt them away.' }
    ],
    interview: '3/4/2025 · interviewed by Sue'
  },
  {
    id: 'hung', name: 'Hung Wiriya', ethnicity: 'Thai', partner: 'Thai', icon: '🌊',
    theme: 'Bliss by the River',
    quote: '"I felt a sense of bliss. I still have the feeling of bliss and happiness even when I recall that moment now."',
    stages: ['Childhood', 'Letters', 'Hong Kong'],
    sections: [
      { title: 'Climbing Trees, Jumping into the River', body: 'I was born in a rural area in Thailand. We ate whatever we had and never experienced hunger. When I was young, I played with a group of neighbours. We would climb up a tree and then jump into the river while watching the cows. I felt a sense of bliss—and I still have the feeling of bliss when I recall that moment now.' },
      { title: 'Learning to Read Through Letters', body: 'When I was 16, a boy who came to help build water pipes sent the first letter to me. I needed to rely on others to read me his letters. While they read to me, I learnt the words at the same time. I asked people to write letters of reply on my behalf. We exchanged letters for about three years.' }
    ],
    interview: 'Thai Church · 2025'
  },
  {
    id: 'yiu', name: 'Mrs. Yiu', ethnicity: 'Thai', partner: 'Thai', icon: '🍉',
    theme: 'My Life Story',
    quote: '"It was lovely to wait for my mother to finish work at the factory every day."',
    stages: ['Family', 'Work', 'Hong Kong'],
    sections: [
      { title: 'Watermelon Slices', body: 'I was born in a rural area in Thailand. My father is Fujianese, my mother is Thai. They separated when I was young. I lived with my father until I was seven, and then with my mother. My family was poor, so I didn\'t study extensively. My mother gave me a bit of pocket money to buy slices of watermelon. It was lovely to wait for her to finish work at the factory every day.' },
      { title: 'Working at Fourteen', body: 'I worked in my father\'s factory with my mother since the law allowed work from the age of 14. I received a salary every 10 days and worked hard, although sometimes I was criticised for my lack of experience. I used to work carefully and be humble in the working environment.' }
    ],
    interview: 'Thai Church · 2025'
  },
  {
    id: 'yuewan', name: 'Yue Wan (月芸)', ethnicity: 'Thai', partner: 'Thai', icon: '🌹',
    theme: 'Beautiful Rose',
    quote: '"I will plant this pink rose carefully in my heart—blooming once more, like a radiant rose."',
    stages: ['Childhood', 'Bangkok', 'Singapore', 'Hong Kong'],
    sections: [
      { title: 'A Difficult Childhood', body: 'I was born near the border of Cambodia and Vietnam, the fourth of eight siblings. My father passed away when I was young. From ages five to eight, due to financial struggles, I worked in the fields with my sister, washing dishes, doing laundry, cleaning. From eight to ten, I worked outside the home for a daily wage of 10 baht. I gave all my earnings to my mother.' },
      { title: 'Bangkok at Eleven', body: 'At eleven, I was taken to Bangkok to work, carrying and selling onions and oranges. I ate only oranges to save every baht for my mother. After a month, I returned home with 2,700 baht. Though it was tough, I\'d give this month a perfect score.' },
      { title: 'Hopes for the Future', body: 'Reflecting on my life\'s ups and downs, I hope my future will rise steadily, like a vibrant pink rose in full bloom. I will plant this pink rose carefully in my heart. Now, I take time to appreciate the beauty of flowers and trees—blooming once more, like a radiant pink rose.' }
    ],
    interview: '17/5/2025 · interviewed by Sue'
  },
  {
    id: 'bishnu', name: 'Bishnu Kumari G.', ethnicity: 'Nepali', partner: 'Zubin', icon: '💍',
    theme: 'A Good Match',
    quote: '"I was the most beautiful lady in our village, and he was the most handsome. I thought it was a good match."',
    stages: ['Marriage', 'Motherhood', 'Hong Kong'],
    sections: [
      { title: 'An Arranged Marriage', body: 'When I was 18, I got married. I knew my husband 1 year before. One day, his father came to my home to talk with my father. After their long discussion, my father told me I was going to marry him. In our village, ladies could not make decisions about marriage. Since my mother passed away when I was 6, my father had brought me up. I could not say no.' },
      { title: 'Most Beautiful, Most Handsome', body: 'We got married when I was 18. At that time, he was so handsome—others said he looked good. For me, he was just ok. At that time, I was the most beautiful lady in our village. I thought it was a good match. After 1 year of marriage, we had our first son. Both of us were so happy.' }
    ],
    interview: 'Zubin Foundation · 2025'
  },
  {
    id: 'durga', name: 'Durga Devi G.', ethnicity: 'Nepali', partner: 'Zubin', icon: '🍄',
    theme: 'My Childhood in Gorkha',
    quote: '"I\'d run into the forest to pick wild berries and herbs to eat—heavy as anything, but joyful."',
    stages: ['Gorkha', 'Forest', 'Adulthood'],
    sections: [
      { title: 'A Father Who Returned', body: 'I grew up in a village in the hilly region of Gorkha, Nepal. My dad was in the Indian army. At 24, he quit, went to India, and disappeared for 18 years. Everyone thought he was gone for good until a letter arrived saying he\'d been found, sick and near death. Miraculously, he came back to us safe and sound.' },
      { title: 'Mushrooms in the Forest', body: 'As a kid, I loved playing with my cousin sister. We didn\'t have toys, so we played with stones. We\'d run into the forest to pick wild berries and herbs to eat. Those berries were bitter back in the village, but I\'ve seen them in Hong Kong supermarkets now, sweet and fancy. There was a big tree where mushrooms grew like crazy. I\'d climb up, pick a ton, and stuff them into a "doko"—our Nepali bamboo basket—heavy as anything.' }
    ],
    interview: 'Zubin Foundation · 2025'
  },
  {
    id: 'jit', name: 'Jit Kumari R.', ethnicity: 'Nepali', partner: 'Zubin', icon: '🍚',
    theme: 'Cooking for the Family',
    quote: '"Cooking was the only thing that I could do to support the family. I felt good about that."',
    stages: ['Childhood', 'Marriage at 12', 'Hong Kong'],
    sections: [
      { title: 'The Only One at Home', body: 'When I was a young child, I was happily living with my family. There was no schooling system in my village. I just ran and played around. When I got older, around 8 to 10, I needed to prepare lunch and dinner for my family. Cooking was the only thing I could do to support them. Everyone older than me went to work in the day. I was the one only at home. I felt good that I could do something to support the family.' },
      { title: 'Married at Twelve', body: 'When I was 12, I got married to my husband, who was 13. But I was not happy. At our village, females over 12 were considered suitable to marry. My parents arranged it. I did not know who I was going to marry—just that he was a male who lived far from my village.' }
    ],
    interview: 'Zubin Foundation · 2025'
  },
  {
    id: 'sanmaya', name: 'San Maya R.', ethnicity: 'Nepali', partner: 'Zubin', icon: '🐑',
    theme: 'My Life is Full of Love',
    quote: '"I would give my childhood a perfect score of ten. I was free from household chores."',
    stages: ['Affluent Childhood', 'Studies', 'Marriage'],
    sections: [
      { title: 'A Perfect Childhood', body: 'I would give my childhood a perfect score of ten. I grew up in a relatively affluent family with vast fields, 35 sheep, and 35 cows. Our main income came from renting out farmland to other families. As the youngest of eleven, I was free from household chores. I vividly remember sneaking into my grandmother\'s room—she was strict, but with me she was the exception.' },
      { title: 'Started School at Ten', body: 'I didn\'t start school until I was ten and only studied until twelve. From ages twelve to fifteen, I began learning to cook and do household tasks. At fifteen, I started delivering meals to the farmers in the fields and milking the cows.' }
    ],
    interview: 'Zubin Foundation · 2025'
  },
  {
    id: 'latha', name: 'S. R. Latha', ethnicity: 'Indian', partner: 'Zubin', icon: '🌷',
    theme: 'Beautiful Life',
    quote: '"I placed Beautiful Life upon myself, resting the bouquet over my heart. The world\'s burdens dissolved."',
    stages: ['Marriage', 'Career', 'Reflection'],
    sections: [
      { title: 'The World\'s Finest Husband', body: 'My childhood and youth are now a distant blur. At 18, I began working in a government office, and at 19, I met the man I cherish as the world\'s finest husband. We lived together for several years before marrying and welcomed two children. Tragically, about eight years later, he passed away. I deeply treasure those days with him—the happiest chapter of my life, deserving 9 out of 10.' },
      { title: 'A Bouquet over My Heart', body: 'Faced with art materials—clay, corn kernels, and coloured fluffy wire—I chose coloured fluffy wire to weave my life\'s narrative. As I held them, I envisioned flowers, crafting a bouquet named "Beautiful Life." It signifies the release of all negativities, leaving clarity and calm. In a final gesture, I placed "Beautiful Life" upon myself, resting the bouquet over my heart. With three deep breaths, I nestled "Beautiful Life" within my soul, holding it close forever.' }
    ],
    interview: '3/4/2025 at the Zubin Foundation · interviewed by Sue'
  },
  {
    id: 'chinimaya', name: 'Chinimaya G.', ethnicity: 'Nepali', partner: 'Zubin', icon: '👧',
    theme: 'A Happy Girl',
    quote: '"There were no worries or any negative emotions at that moment. I was a happy girl in that period."',
    stages: ['Childhood', 'Caring for Siblings', 'Reflection'],
    sections: [
      { title: 'Surrounded by Love', body: 'I was the third in the family, with 2 elder brothers, 1 younger brother, and 3 younger sisters. In my childhood, my elder brothers loved me a lot, and so did my mother and father. Before my younger sisters were born, all the loves and attentions were on me. I just played around with elder brothers and relatives in the villages. There were no worries or any negative emotions at that moment. I was a happy girl in that period.' },
      { title: 'Caring for the Family', body: 'After my younger sisters were born, I needed to stay home to take care of them. In my village culture, girls were not allowed to receive formal education. I stayed at home to take care of the youngers and finished household chores every day. I loved my brothers and sisters. I felt I had enough abilities and power to take care of the needs of the family.' }
    ],
    interview: 'Zubin Foundation · 2025'
  }
];

// ===== RENDER STORY CARDS =====
function renderStories(filter = 'all') {
  const grid = document.getElementById('storyGrid');
  const filtered = filter === 'all' ? stories : stories.filter(s => s.partner === filter);
  grid.innerHTML = filtered.map(s => `
    <div class="story-card" onclick="openModal('${s.id}')">
      <div class="story-card-cover">
        <span class="story-card-cover-tag">${s.partner}</span>
        ${s.icon}
      </div>
      <div class="story-card-body">
        <div class="story-theme">${s.theme}</div>
        <div class="story-card-name">${s.name}</div>
        <div class="story-card-meta">${s.ethnicity}</div>
        <div class="story-quote">${s.quote}</div>
        <div class="story-card-foot">
          <div class="stage-tags">${s.stages.slice(0,2).map(t => `<span class="stage-tag">${t}</span>`).join('')}</div>
          <span class="read-more">Read story →</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== FILTER =====
document.getElementById('filterBar').addEventListener('click', (e) => {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderStories(e.target.dataset.filter);
});

// ===== MODAL =====
function openModal(id) {
  const s = stories.find(s => s.id === id);
  if (!s) return;
  document.getElementById('modalAvatar').textContent = s.icon;
  document.getElementById('modalName').textContent = s.name;
  document.getElementById('modalMeta').textContent = `${s.ethnicity} · ${s.partner}`;
  document.getElementById('modalTheme').textContent = s.theme;
  document.getElementById('modalBody').innerHTML = s.sections.map(sec => `
    <div class="modal-section">
      <div class="modal-section-title">${sec.title}</div>
      <p>${sec.body}</p>
    </div>
  `).join('');
  document.getElementById('modalFooter').textContent = s.interview;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== INIT =====
renderStories();

// ===== SCROLL FADE-IN =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('section').forEach(s => {
  s.classList.add('fade-in');
  observer.observe(s);
});

// ===== CLOSE MOBILE NAV ON LINK CLICK =====
document.querySelectorAll('.clri-page-nav a[href*="#"]').forEach(function (a) {
  a.addEventListener('click', function () {
    if (window.matchMedia('(max-width: 768px)').matches) {
      document.documentElement.classList.remove('nav-open');
    }
  });
});