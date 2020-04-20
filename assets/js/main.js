
    if (document.readyState !== 'loading') {
        eventHandler();
      } else {
        document.addEventListener('DOMContentLoaded', () => {
            let navbar = document.getElementsByTagName("nav")[0]

            fetch('components/navbar.html').then(data => data.text()).then(data => {
                navbar.innerHTML = data
            })
        });
      }
