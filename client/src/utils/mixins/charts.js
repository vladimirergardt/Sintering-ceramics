export default {
  data() {
    return {
      charts: {
        t: {
          columns: [{
            'type': 'number',
            'label': 'Время'
          }, {
            'type': 'number',
            'label': 'Температура'
          }],
          rows: [],
          options: {
            title: 'Температура',
            hAxis: {
              title: 'Время, с',
              minValue: '0',
              maxValue: '100'
            },
            vAxis: {
              title: 'Температура',
              minValue: 300,
              maxValue: 1200
            },
            width: 500,
            height: 300,
            curveType: 'function'
          }
        },
        por: {
          columns: [{
            'type': 'number',
            'label': 'Время'
          }, {
            'type': 'number',
            'label': 'Пористость, %'
          }],
          rows: [],
          options: {
            title: 'Пористость',
            hAxis: {
              title: 'Время, с',
              minValue: '0',
              maxValue: '100'
            },
            vAxis: {
              title: 'Пористость',
              minValue: 0,
              maxValue: 100
            },
            width: 500,
            height: 300,
            curveType: 'function'
          }
        },
        plot: {
          columns: [{
            'type': 'number',
            'label': 'Время'
          }, {
            'type': 'number',
            'label': 'Плотность'
          }],
          rows: [],
          options: {
            title: 'Плотность',
            hAxis: {
              title: 'Время, с',
              minValue: '0',
              maxValue: '100'
            },
            vAxis: {
              title: 'Плотность',
              minValue: 0,
              maxValue: 10000
            },
            width: 500,
            height: 300,
            curveType: 'function'
          }
        },
        zern: {
          columns: [{
            'type': 'number',
            'label': 'Время'
          }, {
            'type': 'number',
            'label': 'Размер зерна'
          }],
          rows: [],
          options: {
            title: 'Размер зерна',
            hAxis: {
              title: 'Время, с',
              minValue: '0',
              maxValue: '100'
            },
            vAxis: {
              title: 'Размер зерна',
              minValue: 0,
              maxValue: 1.4
            },
            width: 500,
            height: 300,
            curveType: 'function'
          }
        },
        usad: {
          columns: [{
            'type': 'number',
            'label': 'Время'
          }, {
            'type': 'number',
            'label': 'Усадка'
          }],
          rows: [],
          options: {
            title: 'Усадка',
            hAxis: {
              title: 'Время, с',
              minValue: '0',
              maxValue: '100'
            },
            vAxis: {
              title: 'Усадка',
              minValue: 0,
              maxValue: 0.0000001,
            },
            width: 500,
            height: 300,
            curveType: 'function'
          }
        },
      }
    }
  }
}
