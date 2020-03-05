const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  tabItems.forEach(item => item.classList.remove('tab-border'));
  tabContentItems.forEach(item => item.classList.remove('show'));

  // Add border to current tab
  // let tabTarget = this.dataset.target;
  let tabTargetId = this.getAttribute('data-target');
  this.classList.add('tab-border');
  document.querySelector(tabTargetId).classList.add('show');
}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
