// যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার কালার lightblue করেদিতে পারো কিনা। 

const h2Tags = document.getElementsByTagName('h2');
for(const h2Tag of h2Tags){
    h2Tag.style.color = 'green';
}

// ওই ওয়েবসাইট এ bag আইডি দিয়ে একটা সেকশন আছে। সেই সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা

document.getElementById('bag').style.backgroundColor = 'tomato';
// card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
const allCards = document.getElementsByClassName('card');
for(const card of allCards){
    card.style.borderRadius = '30px';
}

// ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো  

document.getElementById('shoe-one').addEventListener('click',function(){
    console.log('Task to be complished');
})
// এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

const buyButtons = document.getElementsByClassName('buy-button');
for(const buyButton of buyButtons){
    buyButton.addEventListener('click',function(event){
        event.target.remove();
    })
}

// একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const subButton = document.getElementById('subscribe');
    if(event.target.value === 'email'){
        subButton.removeAttribute('disabled')
    }else{
        subButton.setAttribute('disabled',true);
    }
});

// নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

document.getElementById('change-bg').addEventListener('dblclick',function(event){
    event.target.style.backgroundColor ='goldenrod';
})

// একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 
document.getElementById('second-bag').addEventListener('mouseenter',function(event){
    event.target.setAttribute('src','images/bags/nike.png');
})
document.getElementById('second-bag').addEventListener('mouseleave',function(event){
    event.target.setAttribute('src','images/bags/bag-2.png');
})