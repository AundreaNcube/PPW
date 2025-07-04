      document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const statusElement = document.getElementById("form-status");
        statusElement.textContent = "Thanks for reaching out! 🎉";
        statusElement.style.animation = "bounceIn 0.5s ease-out";
        this.reset();
        
        setTimeout(() => {
          statusElement.style.animation = "";
        }, 500);
      });

      document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark");
        const icon = this.querySelector('.toggle-icon');
        icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
      });

      // Add scroll animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
      });