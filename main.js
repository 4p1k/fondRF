
    // Выбор суммы пожертвования
    const donationOptions = document.querySelectorAll('.donation-option');
    const customAmountInput = document.getElementById('custom-amount');
    const customDonateBtn = document.getElementById('custom-donate');
    
    donationOptions.forEach(option => {
      option.addEventListener('click', function() {
        donationOptions.forEach(opt => opt.classList.remove('active'));
        this.classList.add('active');
        customAmountInput.value = this.getAttribute('data-amount');
      });
    });
    
    customAmountInput.addEventListener('input', function() {
      donationOptions.forEach(opt => opt.classList.remove('active'));
    });
    
    customDonateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const amount = customAmountInput.value || 2500;
      alert(`Спасибо за ваше пожертвование в размере ${amount} рублей! Мы свяжемся с вами в ближайшее время.`);
    });
    
    // Добавление дополнительных снежинок
    function createSnowflakes() {
      const snowflakesContainer = document.querySelector('.snowflakes');
      const snowflakeCount = 20;
      
      for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('span');
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 10 + 5) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;
        snowflakesContainer.appendChild(snowflake);
      }
    }
    
    createSnowflakes();
