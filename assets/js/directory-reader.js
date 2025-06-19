document.addEventListener('DOMContentLoaded', function() {
    // Base URL for the repository
    const baseRepoUrl = 'https://api.github.com/repos/mennlo/grappling-games/contents/';
    const basePageUrl = window.location.href.split('index.html')[0];
    
    // The directory we want to list
    const gamesDirectory = 'games';
    
    // Get the games tree element
    const gamesTreeElement = document.getElementById('games-tree');
    
    // Function to create a tree view from the directory structure
    async function createDirectoryTree(path = gamesDirectory, parentElement = gamesTreeElement) {
        try {
            const response = await fetch(`${baseRepoUrl}${path}`);
            
            if (!response.ok) {
                throw new Error(`Error fetching directory: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            // Sort items: folders first, then files
            const sortedData = data.sort((a, b) => {
                if (a.type === b.type) {
                    return a.name.localeCompare(b.name);
                }
                return a.type === 'dir' ? -1 : 1;
            });
            
            const ul = document.createElement('ul');
            parentElement.appendChild(ul);
            
            for (const item of sortedData) {
                const li = document.createElement('li');
                ul.appendChild(li);
                
                if (item.type === 'dir') {
                    // It's a directory
                    const folderSpan = document.createElement('span');
                    folderSpan.className = 'folder';
                    folderSpan.textContent = formatName(item.name);
                    li.appendChild(folderSpan);
                    
                    // Create a container for the subdirectory contents
                    const subDirContainer = document.createElement('div');
                    subDirContainer.style.display = 'none';
                    li.appendChild(subDirContainer);
                    
                    // Add click event to toggle subdirectory visibility
                    folderSpan.addEventListener('click', function() {
                        if (subDirContainer.children.length === 0) {
                            // Lazy load subdirectory contents
                            createDirectoryTree(`${path}/${item.name}`, subDirContainer);
                        }
                        
                        subDirContainer.style.display = subDirContainer.style.display === 'none' ? 'block' : 'none';
                        folderSpan.classList.toggle('open');
                    });
                } else if (item.name.endsWith('.md')) {
                    // It's a markdown file
                    const a = document.createElement('a');
                    a.href = `${basePageUrl}md-viewer.html?file=${path}/${item.name}`;
                    a.className = 'file';
                    a.textContent = formatName(item.name.replace('.md', ''));
                    li.appendChild(a);
                }
            }
            
            // Update the heading if we're at the root level
            if (path === gamesDirectory) {
                document.querySelector('#directory-listing h2').textContent = 'Grappling Games Directory';
            }
            
        } catch (error) {
            console.error('Error loading directory:', error);
            parentElement.innerHTML = `<p>Error loading directory: ${error.message}</p>`;
        }
    }
    
    // Format directory/file names for display
    function formatName(name) {
        // Replace hyphens with spaces and capitalize each word
        return name.replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    
    // Initialize the directory tree
    createDirectoryTree();
});
