function showSignup() {
  document.getElementById('auth-section').style.display = 'none';
  document.getElementById('signup-section').style.display = 'block';
}

function showLogin() {
  document.getElementById('signup-section').style.display = 'none';
  document.getElementById('auth-section').style.display = 'block';
}

function showNotes() {
  document.getElementById('auth-section').style.display = 'none';
  document.getElementById('signup-section').style.display = 'none';
  document.getElementById('notes-section').style.display = 'block';
}

function login() {
  // Placeholder: replace with real authentication logic or fetch call
  showNotes();
}

function signup() {
  // Placeholder: replace with real signup logic or fetch call
  alert('Signup successful! Now please login.');
  showLogin();
}

function logout() {
  showLogin();
}

function addNote() {
  const content = document.getElementById('noteInput').value;
  if (content.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = content;
  document.getElementById('notesList').appendChild(li);
  document.getElementById('noteInput').value = '';
}
