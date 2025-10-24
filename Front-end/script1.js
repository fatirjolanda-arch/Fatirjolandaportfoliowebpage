
  const h1 = document.getElementById("project1-title");
  const project1 = document.querySelector(".Project1");
  const closeButton = document.querySelector(".Project1 button");

  h1.addEventListener("click", () => {
    project1.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    project1.style.display = "none";
  });

  const h2 = document.getElementById("project2-title");
  const project2 = document.querySelector(".Project2");
  const closeButton2 = document.querySelector(".Project2 button");

  h2.addEventListener("click", () => {
    project2.style.display = "block";
  });

  closeButton2.addEventListener("click", () => {
    project2.style.display = "none";
  });

  const h3 = document.getElementById("project3-title");
  const project3 = document.querySelector(".Project3");
  const closeButton3 = document.querySelector(".Project3 button");

  h3.addEventListener("click", () => {
    project3.style.display = "block";
  });

  closeButton3.addEventListener("click", () => {
    project3.style.display = "none";
  });

  const link1 = document.querySelector('[data-js="access1"]');
  const link2 = document.querySelector('[data-js="access2"]');
  const link3 = document.querySelector('[data-js="access4"]');
  const link4 = document.querySelector('[data-js="access5"]');

  link1.addEventListener("click", () => {
    alert("On Progress");
  });

  link2.addEventListener("click", () => {
    alert("On Progress");
  });
  
  link3.addEventListener("click", () => {
    alert("On Progress");
  });

  link4.addEventListener("click", () => {
    alert("On Progress");
  });

 const form = document.querySelector('form');

 form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const massage = document.getElementById('massage').value;

  console.log('Data yang dikirim ke server:', { name, massage });

  const data = { name, massage};

  try {
    const res = await fetch('/submit', {
      method: 'POST',
       headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await res.json();
    alert(`(Server: ${result.message} (Nama: ${result.data.name}, Massage: ${result.data.massage})`);
    form.reset();
  } catch (err) {
    console.error('error:', err);
    alert('Sending massage was failed!');
  }
 });

  
