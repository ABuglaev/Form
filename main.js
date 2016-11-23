
// var array = [
//   {tag: 'table', options: {attributes: {class: 'SNoBorders'}, children: [
//     {tag: 'tbody', options: {atttributes: {children:
//       {tag: 'tr', options: {attributes: {children :
//         {}}}}}}}
//     ]
//     }
    
//   }};
// ];

$form = document.getElementById('form');
$submit = document.getElementById('submit');

$dev = document.getElementById('dev');
$siteName = document.getElementById('siteName');
$siteUrl = document.getElementById('siteUrl');
$siteDate = document.getElementById('siteDate');
$visitAmount = document.getElementById('visitAmount');
$email = document.getElementById('email');
$description = document.getElementById('description');

$submit.addEventListener('click', function() {
  var isValid = true;
  var errors = {};
  var reValidate = function() {
    
    var errors_str = '';
    for(K in errors) {
      errors_str += errors[K] + '\n';
    };
    alert(errors_str);

    for(K in errors) {
      errors_str += errors[K] + '\n';
    };

  };

  if ($dev['value'].length<2) {errors['dev'] = 'Не указаны разработчики'};
  if ($siteName['value'].length<1) {errors['siteName'] = 'Не указано название сайта'};
  if ($siteUrl['value'].length<1) {errors['siteUrl'] = 'Не указан URL'};
  if ($visitAmount['value'].length<1) {errors['visitAmount'] = 'Не указано кол-во посещений'};
  if ($email['value'].length<1) {errors['email'] = 'Не указан E-mail'};
  if ($description['value'].length<1) {errors['description'] = 'Нет описания сайта'};

  if (errors) { reValidate(); };

}, true);