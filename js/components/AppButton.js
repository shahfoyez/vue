export default { 
    template: '<button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 mx-2" disabled:cursor-not-allowed :disabled="processing"> <slot /> </button>',
    mounted(){
        // alert("hello");
    },
    data() {
        return  {
            processing: true
        }
    },
    
}
 