<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="svgName"></use>
    </svg>
</template>

<script>
import { reactive, ref, isRef, onMounted, computed } from "@vue/composition-api";

export default {
    name: 'svg-icon',
    props:{
        iconName:{
            type:String,
            default:'',
            required:false,
            validator: (value)=>{
                return value
            }
        },
        iconClass: {
            type:String,
            default:'',
        },
        // iconArray:{
        //     type:Array,
        //     default:()=>[]
        // },
    },
    setup(props){

        const count = ref(10);
        const svgName = computed(()=>`#icon-${props.iconName}`);
        const svgClass = computed(()=>{
            if(props.iconClass){
                return `svg-icon ${props.iconClass}`
            }else{
                return 'svg-icon'
            }
        })

        const plusOne = computed(()=>{
            return count.value + 1
        })

        return{
            count,
            plusOne,
            svgName,
            svgClass
        }
    }
}
</script>

<style lang="scss" scoped>

.svg-icon{
    width: 1em;
    height: 1em;
    padding-right: 7px;
    font-size: 16px;
    fill: currentColor;
    overflow: hidden;
}

</style>