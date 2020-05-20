Vue.component('contador',{
    data(){
        return {
            contador: this.init
        }
    },
    props:['init', 'boton'],
    methods:{
        contar(){
            this.contador++
        }
    },
    template: 
    `
        <div>
            <button class= "btn btn-danger my-2" @click="contar()">Contar {{ contador }}</button>
        </div>

    `
}) 

var app = new Vue({
   
    el: '#app',
   
    data: {
      mensaje: 'Soy un mensaje',
      mensajeHTML: '<i>Soy un mensaje</i>',
      valor:123,
      valor2:456,
      valor3:789,
      contador:0,
      contador2:123,
      contador3:456,
      mostrar: true,
      mostrar2: true,
      nombre: '',
      estado1: true,
      estado2: true,
      usuarios: [
          'Juan',
          'Pedro',
          'Ana',
          'Laura'
      ],
      alumnos: [
          {nombre: 'Juana', apellido: 'Azurduy', edad: 32, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png'},
          {nombre: 'Mercedes', apellido: 'Sosa', edad: 33, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png'},
          {nombre: 'Manuel', apellido: 'Belgrano', edad: 34, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png'},
          {nombre: 'Mariano', apellido: 'Moreno', edad: 35, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-128.png'}
      ]
    },
   
    methods: {
        incrementar(){
            this.contador3++
        },
        getContador(){
            return this.contador3
        },
        actualizar(e){
            let dato = e.target.value
            console.log(dato)
            this.valor2 = dato
        },
        cambiarVisibilidad(){
            this.mostrar2 = !this.mostrar2

        },
        obtenerTituloVisibilidad(){
            return this.mostrar2? 'Ocultar' : 'Mostrar'
        },
        visibilidad(){
            return this.mostrar2
        },
        borrar(index){
            this.alumnos.splice(index,1)
        },
        agregarAlumno(){
            var alumno = {nombre: 'Marina', apellido: 'Moreno', edad: 40, curso: false, 
            foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-512.png'}

            this.alumnos.push(alumno)
        }
    },
   
    computed: {
        calcularAlumnosEnCurso(){
            let cant = 0
            this.alumnos.forEach(function(alumno){
                if(alumno.curso) cant++
            })
            return{
                cantidad: cant,
                total: this.alumnos.length
            }
        }
    },

  });
