let ready = function() {
    const cats = document.getElementById('cats');
    const dogs = document.getElementById('dogs');
    const parrots = document.getElementById('parrots');

    let conn_data;
    conn.onmessage = event =>  {
        conn_data = JSON.parse(event.data);
        let votes_total = conn_data['cats'] + conn_data['dogs'] + conn_data['parrots'];
        // Выводит результаты голосования в соответвующие прогрессбары
        cats.style.cssText = `width: ${conn_data['cats']*100/votes_total}%; background-color: #70C370;`
        cats.textContent = `${conn_data['cats']} (${Math.round(conn_data['cats']*100/votes_total)}%)`
        dogs.style.cssText = `width: ${conn_data['dogs']*100/votes_total}%; background-color: #DD9A5F;`
        dogs.textContent = `${conn_data['dogs']} (${Math.round(conn_data['dogs']*100/votes_total)}%)`
        parrots.style.cssText = `width: ${conn_data['parrots']*100/votes_total}%; background-color: #66DDAA;`
        parrots.textContent = `${conn_data['parrots']} (${Math.round(conn_data['parrots']*100/votes_total)}%)`
    }
}

const conn = new EventSource('https://sf-pyw.mosyag.in/sse/vote/stats');
document.addEventListener("DOMContentLoaded", ready);
