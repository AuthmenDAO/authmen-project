export default function (context) {
    if(process.client){
        let routeUrl = ['/user'];
        window.scroll(0,0);
        if(routeUrl.includes(context.route.path)){
            if(!context.store.state.userInfo){
                context.redirect('/login')
            }
        }
    }
}