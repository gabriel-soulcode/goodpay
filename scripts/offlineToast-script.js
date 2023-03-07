
const offlineToast = document.getElementById("offlineToast");
const toast = new bootstrap.Toast(offlineToast);
const onlineToast = document.getElementById("onlineToast");
const onToast = new bootstrap.Toast(onlineToast);

addEventListener('offline', () => {

    toast.show();

});

addEventListener('online', () => {

    toast.hide();
    onToast.show();

})

