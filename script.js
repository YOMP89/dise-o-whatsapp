const contacts = [
    { name: 'Juan Pérez', number: '123456789', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'María López', number: '987654321', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Carlos González', number: '543216789', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Ana Rodríguez', number: '678954321', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'Pedro Ramírez', number: '1122334455', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { name: 'Laura Fernández', number: '5544332211', photo: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { name: 'David Martínez', number: '6677889900', photo: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { name: 'Elena García', number: '4455667788', photo: 'https://randomuser.me/api/portraits/women/8.jpg' },
   
];

const contactList = document.getElementById('contact-list');
const chatBody = document.getElementById('chat-body');
const contactName = document.getElementById('contact-name');
const contactPhoto = document.getElementById('contact-photo');

// Crear la lista de contactos
contacts.forEach(contact => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${contact.photo}" alt="${contact.name}">
        <span>${contact.name}</span>
    `;
    li.addEventListener('click', () => openChat(contact));
    contactList.appendChild(li);
});

function openChat(contact) {
    contactName.textContent = contact.name;
    contactPhoto.src = contact.photo;
    chatBody.innerHTML = `<p>Chat iniciado con ${contact.name} (${contact.number})</p>`;
}

// Simular envío de mensajes
const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        const p = document.createElement('p');
        p.textContent = `Tú: ${message}`;
        chatBody.appendChild(p);
        messageInput.value = '';
    }
});
