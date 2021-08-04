new Vue({
  el: '#client-container',
  data: {
    search: '',
    clientsFiltered: [],
    clientList: [
      { name: "pedro", total: 20, since: "2021-01-03" },
      { name: "pedro2", total: 10, since: "2021-01-01" },
      { name: "pedro3", total: 20, since: "2021-01-04" }
    ],
    ordenation: { column: "name", orderByAsc: true }
  },
  methods: {
    getIconStatus: function (column) {
      if (column === this.ordenation.column) {
        return this.ordenation.orderByAsc ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
      }
      return '';
    },
    changeOrder: function (column) {
      if (column === this.ordenation.column) {
        this.ordenation.orderByAsc = !this.ordenation.orderByAsc;
      } else {
        this.ordenation.column = column
        this.ordenation.orderByAsc = true;
      }
      this.order();
    },
    filterClient: function () {
      this.clientsFiltered = this.clientList.filter((client) => (client.name || "").toUpperCase().includes(this.search.toUpperCase()))
    },
    order: function () {
      this.clientsFiltered = this.clientsFiltered.sort((client1, client2) => {
        const { column, orderByAsc } = this.ordenation;
        const type = {
          name: "string",
          total: "number",
          since: "date",
        }
        const result = compareTo(client1[column], client2[column], type[column]);
        return (orderByAsc ? result : result * (-1));
      });
    }
  },
  mounted() {
    fetch("http://127.0.0.1:3000/client")
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        console.error("request error");
      })
      .then((response) => {
        if (response.success) {
          this.clientList = response.data
          this.clientsFiltered = [...this.clientList];
          this.order();
        } else {
          console.error("error to get client list");
        }
      })
      .catch(function (err) {
        console.error("request error");
      });
  }
});