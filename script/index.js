
const loadLessons = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res => res.json())
    .then((json)=> displayLesson(json.data));
};

const loadLevelword=(id)=>{
    const url=`https://openapi.programming-hero.com/api/levels/${id}`;
    console.log(url);
    fetch(url)
    .then(res=>res.json)
    .then(data=>displaylevelword(data.data));
};
const displaylevelword=(words)=>{
    const wordcontainer=document.getElementById("word-container");
    wordcontainer.innerHTML="";
    words.forEach((word)=>{
        console.log(word);
        const card=document.createElement("div");
        card.innerHTML=`<div class="bg-white py-20 px-5 text-center rounded-xl shadow-sm space-y-4">
      <h2 class="font-bold text-2xl ">${word.word}</h2>
      <p class="font-semibold font-bangla text-xl">Meaning /Pronounciation</p>
      <div class="font-medium font-bangla text-2xl">${word.meaning} / ${word.pronunciation}</div>
      <div class=" flex justify-between items-center">
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-info"></i></button>
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume"></i></button>
      </div>
    </div>`;

        wordcontainer.append(card);
    })
};

const displayLesson =(lessons)=>{
    // 1. Get the container $ empty

    const levelcontainer= document.getElementById('level-container');
    levelcontainer.innerHTML="";

    //2.get into even lesson 

    for(let lesson of lessons){
        // 3.create element 
        console.log(lesson);
        const btnDiv =document.createElement("div");
        btnDiv.innerHTML=`<button onclick="loadLevelword(${lesson.level_no})"  class="btn btn-outline btn-primary"><i class="fa-solid fa-right-from-bracket"></i>
            Lesson-${lesson.level_no}
            </button>`;

            //4.appnd container
            levelcontainer.append(btnDiv);
    }
    
}

loadLessons();

