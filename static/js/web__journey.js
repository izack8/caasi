document.addEventListener("DOMContentLoaded", function() {
    fetchEntries();
    initializeScrollToBottom();
});

// Function to fetch entries from the JSON file and display them
function fetchEntries() {
    fetch('/data/entries/entries.json')
        .then(response => response.json())
        .then(data => {
            const mainContentText = document.querySelector('.main_content_text');
            data.forEach(entry => {
                const dateHeader = createDateHeader(entry.date);
                mainContentText.appendChild(dateHeader);

                const ul = document.createElement('ul');
                ul.style.textAlign = 'justify';

                entry.entries.forEach(item => {
                    const li = createEntryItem(item);
                    ul.appendChild(li);
                });

                mainContentText.appendChild(ul);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to create a date header element
function createDateHeader(date) {
    const dateHeader = document.createElement('h3');
    dateHeader.textContent = date;
    return dateHeader;
}

// Function to create an entry item element
function createEntryItem(item) {
    const li = document.createElement('li');
    li.style.marginBottom = '15px';
    const text = item.text.replace(/\n/g, '<br>');
    li.innerHTML = `${text}`;

    if (item.subpoints && item.subpoints.length > 0) {
        const subUl = createSubpointsList(item.subpoints);
        li.appendChild(subUl);
    }

    return li;
}

// Function to create a subpoints list element
function createSubpointsList(subpoints) {
    const subUl = document.createElement('ul');
    subUl.classList.add('subpoints'); // Add class for styling
    subpoints.forEach(subpoint => {
        const subLi = document.createElement('li');
        subLi.textContent = subpoint;
        subUl.appendChild(subLi);
    });
    return subUl;
}

// Function to initialize scroll to bottom functionality
function initializeScrollToBottom() {
    document.getElementById('scrollToBottom').addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
}