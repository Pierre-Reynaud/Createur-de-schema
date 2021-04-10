//////////////////////////////////////////////////////////////////////////////////////////OBJET//////////////////////////////////////////////////////////////////////////////////////////

//ObjetPoint est un objet contenant des coordonnées
class ObjetPoint {
    /**
     * Crée une instance de objetPoint
     * 
     * @constructor
     * @this {objetPoint}
     * @param {number} x Position du point sur l'axe de l'abscisse.
     * @param {number} y Position du point sur l'axe de l'ordonnée.
     */
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
        console.log("Point crée, x:"+this.x+" y:"+this.y);
    }

    /**
     * Retourne un tableau avec les coordonnées du point.
     * 
     * @this {objetPoint}
     * @return {int[2]} Position de x et position de y.
     */
    DonneCoordonnee() {
        return [this.x, this.y];
    }

    /**
     * Modifie l'axe de l'abscisse.
     * 
     * @param {number} x Position du pour sur l'axe de l'abscisse.
     */
    ChangeX(x) {
        this.x = x;
    }
    /**
     * Retourne la localisation du point sur l'axe de l'abscisse.
     * 
     * @returns {number} Retourne x.
     */
    getX(){
        return this.x;
    }

    /**
     * Modifie l'axe de l'ordonnées.
     * 
     * @param {number} y Position du pour sur l'axe de l'ordonnée.
     */
    ChangeY(y) {
        this.y = y;
    }
    /**
     * Retourne la localisation du point sur l'axe de l'ordonnée.
     * 
     * @returns {number} Retourne y.
     */
    getY(){
        return this.y;
    }
}

//ObjetArea est un objet abstrait permmetant de créer d'autres objet.
class ObjetArea{

/**
 * Crée une instance de objetArea
 * 
 * @constructor
 * @this {ObjetArea}
 * @param {number} id Position du point sur l'axe de l'abscisse.
 * @param {String} typeAire Position du point sur l'axe de l'ordonnée.
 * @param {objetPoint[]} tblObjetPoint Position du point 1 du rectangle.
 */
    constructor(name, typeAire, action, tblObjetPoint, rayon) {
        this.id = ObjetArea.incrementId();
        this.name = name || "";
        this.typeAire = typeAire || "";
        this.action = action || "";
        this.tblObjetPoint = tblObjetPoint || [];
        this.rayon = rayon || 0;
    }

    /**
     * Incrementation automatique de l'id. 
     * 
     * @this {objetArea}
     * @return {number} Retourne le dernier id généré.
     */
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
    }

    /**
     * Retourne l'id de l'objet. 
     * 
     * @this {objetArea}
     * @return {number} Retourne l'id de l'objet.
     */
    getId() {
        return this.id;
    }

    /**
     * Retourne le nom de l'objet. 
     * 
     * @this {objetArea}
     * @return {string} Retourne le nom de l'objet.
     */
    getName(){
        return this.name;
    }

    /**
     * Modifie le nom de l'objet. 
     * 
     * @this {objetArea}
     * @param {string} name le nom de l'objet.
     */
    setName(name){
        this.name = name;
    }

    /**
     * Retourne le type d'aire de l'objet. 
     * 
     * @this {objetArea}
     * @return {string} Retourne le type d'aire de l'objet.
     */
    getTypeAire(){
        return this.typeAire;
    }

    /**
     * Modifie le type d'aire de l'objet. 
     * 
     * @this {objetArea}
     * @param {string} typeAire le type d'aire de l'objet.
     */
    setTypeAire(typeAire){
        this.typeAire = typeAire;
    }

    /**
     * Retourne l'action de l'objet. 
     * 
     * @this {objetArea}
     * @return {string} Retourne l'action de l'objet.
     */
    getAction(){
        return this.action;
    }

    /**
     * Modifie l'action de l'objet. 
     * 
     * @this {objetArea}
     * @param {string} action l'action de l'objet.
     */
    setAction(action){
        this.action = action;
    }

    /**
     * Retourne la liste des points de l'objet. 
     * 
     * @this {objetArea}
     * @return {table} Retourne la liste des points de l'objet.
     */
    getTblObjetPoint(){
        return this.tblObjetPoint;
    }

    /**
     * Modifie la liste des points de l'objet. 
     * 
     * @this {objetArea}
     * @param {table} tblObjetPoint la liste des points de l'objet.
     */
    setTblObjetPoint(tblObjetPoint){
        this.tblObjetPoint = tblObjetPoint;
        this.createArea();
    }

    /**
     * Retourne le rayon de l'objet. 
     * 
     * @this {objetArea}
     * @return {number} Retourne le rayon de l'objet.
     */
    getRayon(){
        return this.rayon;
    }

    /**
     * Modifie l'action de l'objet. 
     * 
     * @this {objetArea}
     * @param {number} rayon le rayon de l'objet.
     */
    setRayon(rayon){
        this.rayon = rayon;
        this.createArea();
    }

    /**
     * Retourne toutes les propriétées de l'objet. (Attention à l'ordre!)
     * 
     * @this {objetArea}
     * @return {table} Retourne un tableau contenant toutes les propriétés.
     */
    getProperty(){
        return [this.id, this.name, this.typeAire, this.action, this.tblObjetPoint, this.rayon];
    }

    //Change le position sur l'axe des abscisses de -1
    up(){
        this.tblObjetPoint.forEach(point => point.ChangeY(parseInt(point.getY())-parseInt(1)));
        this.createArea();
    }

    //Change le position sur l'axe des abscisses de +1
    down(){
        this.tblObjetPoint.forEach(point => point.ChangeY(parseInt(point.getY())+parseInt(1)));
        this.createArea();
    }

    //Change le position sur l'axe des ordonnés de +1
    right(){
        this.tblObjetPoint.forEach(point => point.ChangeX(parseInt(point.getX())+parseInt(1)));
        this.createArea();
    }

    //Change le position sur l'axe des ordonnés de -1
    left(){
        this.tblObjetPoint.forEach(point => point.ChangeX(parseInt(point.getX())-parseInt(1)));
        this.createArea();
    }

    /**
     * Applique la class "collapse" à l'area en fonction de show.
     * 
     * @this {objetArea}
     * @param {boolean} show Détermine si il faut afficher l'area.
     */
    show(show){
        var area = document.getElementById("areaObjet"+this.id);
        if(show == true){
            area.removeAttribute("class", "collapse");
            area.setAttribute("href", this.action);
        } else {
            area.setAttribute("class", "collapse");
            area.removeAttribute("href");
        }
    }

    /**
     * Créé l'area dans la map.
     * 
     * @this {objetArea}
     */
    createArea(){
        this.removeArea();

        //Création de l'aera
        var stringCoord="";
        for (let i = 0; i < this.tblObjetPoint.length; i++) {
            if (this.tblObjetPoint[i].getX()>0 && this.tblObjetPoint[i].getY()>0) stringCoord+=(this.tblObjetPoint[i].getX()+","+this.tblObjetPoint[i].getY()+",")
        }
        if (this.typeAire=="circle") stringCoord+=this.rayon
        else stringCoord = stringCoord.substring(0, stringCoord.length-1);

        var parentMap = document.getElementById("map-img");
        var newArea = document.createElement("area");

        newArea.setAttribute("id", "areaObjet"+this.id);
        newArea.setAttribute("shape", this.typeAire);
        newArea.setAttribute("coords", stringCoord);
        newArea.setAttribute("href", this.action);
        newArea.setAttribute("target", "_blank");
        parentMap.append(newArea);

        console.log("Area créée!");

        var parentSvg = document.getElementById('svg-points-movable');
        var newAreaSvg;

        if (this.typeAire=="poly") {
            newAreaSvg = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        } else {
            newAreaSvg = document.createElementNS("http://www.w3.org/2000/svg",this.typeAire);
        }

        //Création de la forme sur svg
        newAreaSvg.setAttribute("id", "areaSvg"+this.getId());
        newAreaSvg.setAttribute("style", "fill: rgb(255 255 255);stroke-width:2;stroke:rgb(0,0,0);opacity: 0.6;");
        var isPointsSet = true;

        if(this.typeAire=="circle"){
            newAreaSvg.setAttribute("cx", this.tblObjetPoint[0].getX());
            newAreaSvg.setAttribute("cy", this.tblObjetPoint[0].getY());
            newAreaSvg.setAttribute("r", this.rayon);
            if (this.rayon<0) {
                isPointsSet=false;
            }
        } else if(this.typeAire=="rect"){
            var wid=0;
            var hei=0;
            
            if ( this.tblObjetPoint[1]!=null && this.tblObjetPoint[1].getX()!=0 && this.tblObjetPoint[1].getY()!=0) {
                if (parseInt(this.tblObjetPoint[0].getX()) < parseInt(this.tblObjetPoint[1].getX())) {
                    newAreaSvg.setAttribute("x", this.tblObjetPoint[0].getX());
                    wid=this.tblObjetPoint[1].getX()-this.tblObjetPoint[0].getX();
                } else {
                    newAreaSvg.setAttribute("x", this.tblObjetPoint[1].getX());
                    wid=this.tblObjetPoint[0].getX()-this.tblObjetPoint[1].getX();
                }
                if (parseInt(this.tblObjetPoint[0].getY()) < parseInt(this.tblObjetPoint[1].getY())) {
                    newAreaSvg.setAttribute("y", this.tblObjetPoint[0].getY());
                    hei=this.tblObjetPoint[1].getY()-this.tblObjetPoint[0].getY();
                } else {
                    newAreaSvg.setAttribute("y", this.tblObjetPoint[1].getY());
                    hei=this.tblObjetPoint[0].getY()-this.tblObjetPoint[1].getY();
                }
            }
            newAreaSvg.setAttribute("width", wid);
            newAreaSvg.setAttribute("height", hei);
        } else if(this.typeAire=="poly"){
            newAreaSvg.setAttribute("points", stringCoord);
        }
        newAreaSvg.addEventListener('mousemove', onMouseMoveForme, false);
        newAreaSvg.addEventListener('mouseleave', onMouseLeaveForme, false);onClicSvgForme
        newAreaSvg.addEventListener('click', onClicSvgForme, false);
        parentSvg.append(newAreaSvg);

        for (let index = 0; index < this.tblObjetPoint.length; index++) {
            if (this.tblObjetPoint[index].getX()<1 || this.tblObjetPoint[index].getY()<1) {
                isPointsSet = false;
            }
        }

        //Ajout des points d'éditions
        
        if (isPointsSet && this.id==editedArea.getId()) {
            for (let index = 0; index < this.tblObjetPoint.length; index++) {
                var newMovablePoint = document.createElementNS("http://www.w3.org/2000/svg","circle");
                newMovablePoint.setAttribute("id", "movablePoint"+index+"id"+this.id);
                newMovablePoint.setAttribute("style", "fill: rgb(255 0 0);stroke-width:1;stroke:rgb(0,0,0);");
                newMovablePoint.setAttribute("cx", this.tblObjetPoint[index].getX());
                newMovablePoint.setAttribute("cy", this.tblObjetPoint[index].getY());
                newMovablePoint.setAttribute("r", 4);
                newMovablePoint.addEventListener('mousedown', onMouseDownPointMovable, false);
                parentSvg.append(newMovablePoint);
            }
            if (this.typeAire=="circle") {
                var newMovablePoint = document.createElementNS("http://www.w3.org/2000/svg","circle");
                newMovablePoint.setAttribute("id", "movablePoint1id"+this.id);
                newMovablePoint.setAttribute("style", "fill: rgb(255 0 0);stroke-width:1;stroke:rgb(0,0,0);");
                if (parseInt(this.tblObjetPoint[0].getX())+parseInt(this.rayon) < document.getElementById("mapped-img").width) {
                    console.log("droite");
                    newMovablePoint.setAttribute("cx", parseInt(this.tblObjetPoint[0].getX())+parseInt(this.rayon));
                    newMovablePoint.setAttribute("cy", this.tblObjetPoint[0].getY());
                } else if (parseInt(this.tblObjetPoint[0].getY())+parseInt(this.rayon) < document.getElementById("mapped-img").height) {
                    console.log("bas");
                    newMovablePoint.setAttribute("cx", this.tblObjetPoint[0].getX());
                    newMovablePoint.setAttribute("cy", parseInt(this.tblObjetPoint[0].getY())+parseInt(this.rayon));
                } else if (parseInt(this.tblObjetPoint[0].getX())-parseInt(this.rayon) > 0) {
                    console.log("gauche");
                    newMovablePoint.setAttribute("cx", this.tblObjetPoint[0].getX()-this.rayon);
                    newMovablePoint.setAttribute("cy", this.tblObjetPoint[0].getY());
                } else if (parseInt(this.tblObjetPoint[0].getY())-parseInt(this.rayon) > 0) {
                    console.log("haut");
                    newMovablePoint.setAttribute("cx", this.tblObjetPoint[0].getX());
                    newMovablePoint.setAttribute("cy", this.tblObjetPoint[0].getY()-this.rayon);
                }
                newMovablePoint.setAttribute("r", 4);
                newMovablePoint.addEventListener('mousedown', onMouseDownPointMovable, false);
                parentSvg.append(newMovablePoint);
            }
        }

        

        console.log("From svg créée!");
    }

    /**
     * Supprime l'area dans la map.
     * 
     * @this {objetArea}
     */
    removeArea(){
        var parentMap = document.getElementById('map-img');
        var parentSvg = document.getElementById('svg-points-movable');

        if (document.getElementById("areaObjet"+this.id) != null) {
            parentMap.removeChild(document.getElementById("areaObjet"+this.id));
        }
        if (document.getElementById("areaSvg"+this.id) != null) {
            parentSvg.removeChild(document.getElementById("areaSvg"+this.id));
        }

        var loop = 0;
        while (document.getElementById("movablePoint"+loop+"id"+this.id) != null) {
            parentSvg.removeChild(document.getElementById("movablePoint"+loop+"id"+this.id));
            loop++;
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////FONCTIONS UTILITAIRES//////////////////////////////////////////////////////////////////////////////////////////

/**
 * Rafraichis le tableau des area objets ascossiées à la map en cours d'édition
 */
function refreshListAreaObj() {
    var selectAreaObjet = document.getElementById("liste-area-objet");
    selectAreaObjet.innerHTML="";

    for (i = 0; i < tabMyAreaObjet.length; i++) {
        newOptionAreaObj=document.createElement("option");
        newOptionAreaObj.setAttribute("id", "optionAreaObjet"+tabMyAreaObjet[i].getId());
        newOptionAreaObj.setAttribute("value", tabMyAreaObjet[i].getId());
        newOptionAreaObj.textContent=tabMyAreaObjet[i].name;
        selectAreaObjet.appendChild(newOptionAreaObj);
    }
}

/**
 * Met à jour l'appercu de la forme
 */
function updateOverview() {
    if (editedArea.getTypeAire()=="circle") {
        document.getElementById("areaSvg"+editedArea.getId()).setAttribute("cx", document.getElementById("x1").value);
        document.getElementById("areaSvg"+editedArea.getId()).setAttribute("cy", document.getElementById("y1").value);
        document.getElementById("areaSvg"+editedArea.getId()).setAttribute("r", document.getElementById("r1").value);
    } else if (editedArea.getTypeAire()=="poly"){
        var stringCoord="";
        var nbPointTot=document.getElementById('div-point').children.length-2;
    
        for(var i=0; i<nbPointTot; i++) {
            var pointX = 0;
            var pointY = 0;

            if (document.getElementById("x"+(i+1)).value != null) {
                pointX = document.getElementById("x"+(i+1)).value;
            }
            if (document.getElementById("y"+(i+1)).value != null) {
                pointY = document.getElementById("y"+(i+1)).value;
            }
            stringCoord+=(pointX+","+pointY+",");
        }
        stringCoord = stringCoord.substring(0, stringCoord.length-1);
        document.getElementById("areaSvg"+editedArea.getId()).setAttribute("points", stringCoord);
    } else if (editedArea.getTypeAire()=="rect") {
        var wid=0;
        var hei=0;
        
        if (parseInt(document.getElementById("x1").value) < parseInt(document.getElementById("x2").value)) {
            document.getElementById("areaSvg"+editedArea.getId()).setAttribute("x", document.getElementById("x1").value);
            wid=parseInt(document.getElementById("x2").value)-parseInt(document.getElementById("x1").value);
        } else {
            document.getElementById("areaSvg"+editedArea.getId()).setAttribute("x", document.getElementById("x2").value);
            wid=parseInt(document.getElementById("x1").value)-parseInt(document.getElementById("x2").value);
        }
        if (parseInt(document.getElementById("y1").value) < parseInt(document.getElementById("y2").value)) {
            document.getElementById("areaSvg"+editedArea.getId()).setAttribute("y", document.getElementById("y1").value);
            hei=parseInt(document.getElementById("y2").value)-parseInt(document.getElementById("y1").value);
        } else {
            document.getElementById("areaSvg"+editedArea.getId()).setAttribute("y", document.getElementById("y2").value);
            hei=parseInt(document.getElementById("y1").value)-parseInt(document.getElementById("y2").value);
        }
        document.getElementById("areaSvg"+editedArea.getId()).setAttribute("width", wid);
        document.getElementById("areaSvg"+editedArea.getId()).setAttribute("height", hei);
    }
}

/**
 * Affiche ou masuqe les areas
 * 
 * @param {boolean} isTrue true affiche les formes et false masque les formes.
 */
function interfaceEdition(isTrue) {
    if (isTrue) {
        interfaceTypeAire(editedArea.getTypeAire());

        for (let i = 0; i < editedArea.tblObjetPoint.length; i++) {
            document.getElementById("x"+(i+1)).value=editedArea.tblObjetPoint[i].x;
            document.getElementById("y"+(i+1)).value=editedArea.tblObjetPoint[i].y;
        }
        if (editedArea.getTypeAire()=="circle") {
            document.getElementById("r1").value=editedArea.getRayon();
        }

        document.getElementById("btn-creat").textContent="Valider la modification";

        var newBtnAnnuler = document.createElement("button");
        newBtnAnnuler.setAttribute("id", "btn-cancel-modif");
        newBtnAnnuler.setAttribute("class", "btn btn-danger");
        newBtnAnnuler.setAttribute("onClick", "handleBtnCancelModif()");
        newBtnAnnuler.textContent="Annuler la modification";
        document.getElementById("setting-form").append(newBtnAnnuler);
        document.getElementById("btn-edit-area").setAttribute("disabled", "disabled");
        document.getElementById("btn-dup-area").setAttribute("disabled", "disabled");
    } else {
        if (document.getElementById("btn-cancel-modif") != null && document.getElementById("btn-cancel-modif") != "") {
            document.getElementById("btn-creat").textContent="Créer l'objet area";
            document.getElementById("setting-form").removeChild(document.getElementById("btn-cancel-modif"));
            document.getElementById("btn-edit-area").removeAttribute("disabled");
            document.getElementById("btn-dup-area").removeAttribute("disabled");
        }
    }
}
/**
 * Affiche ou masuqe les areas
 * 
 * @param {boolean} isTrue true affiche les formes et false masque les formes.
 */
function showAllArea(isTrue) {
    for (let index = 0; index < tabMyAreaObjet.length; index++) {
        if (tabMyAreaObjet[index] != null) {
            if (isTrue) {
                tabMyAreaObjet[index].createArea();
            } else {
                tabMyAreaObjet[index].removeArea();
            }
        }
    }
}

/**
 * Vide les champs et remplis les listes select
 */
function refreshInterface() {
    document.getElementById("areatype").value = editedArea.getTypeAire();
    document.getElementById("action").value = editedArea.getAction();
    document.getElementById("idaire").value = editedArea.getName();
    interfaceTypeAire(editedArea.getTypeAire());
    interfaceEdition(false);
    refreshListAreaObj();

    handleManualDrawing(1);
    showAllArea(true);
}

/**
 * Créé un élément div identifiable par l'index passé en paramètre.
 * 
 * @param {number} index Index de la ligne.
 * @returns {String} Balise permetant a l'utilisateur de rajouter un point à l'ojbet area.
 */
function addLinePoint(index){
    var newLinePoint= document.createElement("div");
    newLinePoint.setAttribute("id", "div-point-"+index);
    var newP = document.createElement("p");
    newP.textContent="Point "+index;
    var newLabelX = document.createElement("label");
    newLabelX.setAttribute("for", "x"+index);
    newLabelX.textContent="x= ";
    var newInputX = document.createElement("input");
    newInputX.setAttribute("type", "text");
    newInputX.setAttribute("id", "x"+index);
    newInputX.setAttribute("name", "x"+index);
    newInputX.setAttribute("size", "8");
    var newLabelY = document.createElement("label");
    newLabelY.setAttribute("for", "y"+index);
    newLabelY.textContent="y= ";
    var newInputY = document.createElement("input");
    newInputY.setAttribute("type", "text");
    newInputY.setAttribute("id", "y"+index);
    newInputY.setAttribute("name", "y"+index);
    newInputY.setAttribute("size", "8");
    var newBr = document.createElement("br");

    newLinePoint.append(newP);
    newLinePoint.append(newLabelX);
    newLinePoint.append(newInputX);
    newLinePoint.append(newLabelY);
    newLinePoint.append(newInputY);
    newLinePoint.append(newBr);
    return newLinePoint;
}

/**
 * Modifie la div de définition des points.
 * 
 * @param {string} forme l'interface à afficher.
 */
function interfaceTypeAire(forme){
    var parentDiv = document.getElementById('div-point');

    parentDiv.innerHTML = '';
    
    if (forme == "rect") {
        for (let index = 1; index <= 2; index++) {
            parentDiv.append(addLinePoint(index));
            document.getElementById("x"+index).addEventListener('focusout', onChangeCoordArea, true);
            document.getElementById("y"+index).addEventListener('focusout', onChangeCoordArea, true);
        }
    } else if (forme == "poly"){
        for (let index = 1; index <= editedArea.tblObjetPoint.length; index++) {
            parentDiv.append(addLinePoint(index));
            document.getElementById("x"+index).addEventListener('focusout', onChangeCoordArea, true);
            document.getElementById("y"+index).addEventListener('focusout', onChangeCoordArea, true);
        }
        var newBtnAddPoint = document.createElement("button");
        newBtnAddPoint.setAttribute("id", "btn-add-point");
        newBtnAddPoint.setAttribute("onClick", "handleBtnAddLine()");
        newBtnAddPoint.textContent="Ajouter un point";
        parentDiv.append(newBtnAddPoint);

        var newBtnDelPoint = document.createElement("button");
        newBtnDelPoint.setAttribute("id", "btn-sub-point");
        newBtnDelPoint.setAttribute("onClick", "handleBtnSubLine()");
        newBtnDelPoint.textContent="Supprimer un point";
        parentDiv.append(newBtnDelPoint);
    }else if (forme == "circle"){
        var newLinePoint= document.createElement("div");
        newLinePoint.setAttribute("id", "div-point-1");
        var newP = document.createElement("p");
        newP.textContent="Position et rayon";
        var newLabelX = document.createElement("label");
        newLabelX.setAttribute("for", "x1");
        newLabelX.textContent="Pos x= ";
        var newInputX = document.createElement("input");
        newInputX.setAttribute("type", "text");
        newInputX.setAttribute("id", "x1");
        newInputX.setAttribute("name", "x1");
        newInputX.setAttribute("size", "8");
        var newLabelY = document.createElement("label");
        newLabelY.setAttribute("for", "y1");
        newLabelY.textContent="Pos y= ";
        var newInputY = document.createElement("input");
        newInputY.setAttribute("type", "text");
        newInputY.setAttribute("id", "y1");
        newInputY.setAttribute("name", "y1");
        newInputY.setAttribute("size", "8");
        var newLabelR = document.createElement("label");
        newLabelR.setAttribute("for", "r1");
        newLabelR.textContent="Rayon= ";
        var newInputR = document.createElement("input");
        newInputR.setAttribute("type", "text");
        newInputR.setAttribute("id", "r1");
        newInputR.setAttribute("name", "r1");
        newInputR.setAttribute("size", "8");

        var newBr = document.createElement("br");

        newLinePoint.append(newP);
        newLinePoint.append(newLabelX);
        newLinePoint.append(newInputX);
        newLinePoint.append(newLabelY);
        newLinePoint.append(newInputY);
        newLinePoint.append(newLabelR);
        newLinePoint.append(newInputR);
        newLinePoint.append(newBr);
        
        parentDiv.append(newLinePoint);

        document.getElementById("x1").addEventListener('focusout', onChangeCoordArea, true);
        document.getElementById("y1").addEventListener('focusout', onChangeCoordArea, true);
        document.getElementById("r1").addEventListener('focusout', onChangeRayonArea, true);
    }
    console.log("Interface : " + forme);
}

//////////////////////////////////////////////////////////////////////////////////////////HANDLER//////////////////////////////////////////////////////////////////////////////////////////

/**
 * Clic sur créer.
 * Ajoute editedArea au tableau de la map.
 */
function handleCreateArea(){
    tabMyAreaObjet.push(editedArea);

    editedArea = new ObjetArea;

    refreshInterface();
}

/**
 * Clic sur Supprimer une ligne .
 * Supprime une ligne permetant de parametrer des nouveaux points.
 */
function handleBtnSubLine() {
    var parentDiv = document.getElementById('div-point');
    var index = document.getElementById('div-point').children.length-2;

    parentDiv.removeChild(document.getElementById("div-point-"+index));
}

/**
 * Clic sur Ajouter une ligne .
 * Ajoute une ligne afin de parametrer des nouveaux points.
 */
function handleBtnAddLine() {
    var parentDiv = document.getElementById('div-point');
    var index = document.getElementById('div-point').children.length-1;

    parentDiv.insertBefore(addLinePoint(index), document.getElementById('btn-add-point'));
    document.getElementById("x"+index).addEventListener('focusout', onChangeCoordArea, true);
    document.getElementById("y"+index).addEventListener('focusout', onChangeCoordArea, true);
}

/**
 * Ajout une image sélectionné depuis l'explorateur de fichier.
 */
function handleChoiceImage() {
    var input = document.getElementById("cheminimage");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    fReader.onloadend = function(event){
        var img = document.getElementById("mapped-img");
        var svg = document.getElementById("svg-points-movable");
        img.src = event.target.result;
        img.style.maxHeight="800px";
        img.style.maxWidth="800px";
        setTimeout(dimensionSvg,1500);
        //dimensionSvg();

        console.log("Image chargée");
    }
}

function dimensionSvg() {
    document.getElementById("svg-points-movable").style.width = document.getElementById("mapped-img").width;
    document.getElementById("svg-points-movable").style.height = document.getElementById("mapped-img").height;
}

/**
 * Clic sur dessiner mannuelemnt
 * Active la fonction onclicImage() sur l'image
 * Masque la map
 */
function handleManualDrawing(active){
    var svg = document.getElementById("svg-points-movable");
    var checkboxDessin = document.getElementById("checkbox-dessin-manuel");

    if (active==1) {
        svg.removeEventListener('mouseup', onClicSvgSetPoint, true);
        checkboxDessin.setAttribute("onClick", "handleManualDrawing(0)");
        checkboxDessin.checked = false;

        showAllArea(true);
    } else {
        svg.addEventListener('mouseup', onClicSvgSetPoint, true);
        checkboxDessin.setAttribute("onClick", "handleManualDrawing(1)");
        checkboxDessin.checked = true;

        showAllArea(false);
        editedArea.removeArea();
        editedArea.rayon=0;

        if (editedArea.getTypeAire() == "poly") {
            nbClicDessin=document.getElementById('div-point').children.length-2;
        } else {
            nbClicDessin=2;
        }
    
        if (editedArea.getTypeAire() == "circle") {
            document.getElementById("x1").value = "";
            document.getElementById("y1").value = "";
            document.getElementById("r1").value = "";
        } else {
            for(var i=0; i<nbClicDessin; i++) {
                document.getElementById("x"+(i+1)).value = "";
                document.getElementById("y"+(i+1)).value = "";
            }
        }
    }
    
}

/**
 * Clic sur un Area objet dans la liste.
 * Focus l'objetArea sélectionné.
 */
function handleFocusArea() {
    if (document.getElementById("liste-area-objet").value != "") {
        showAllArea(false);
        for (let index = 0; index < tabMyAreaObjet.length; index++) {
            if (tabMyAreaObjet[index].getId() == document.getElementById("liste-area-objet").value) {
                tabMyAreaObjet[index].createArea();
            }
        }
    } else {
        console.log("Aucune valeur sélectionnée");
    }
    
}

/**
 * Clic sur flêche haut.
 * Modifi la position de la flêche de 1px vers le haut.
 */
function handleUpForm(){
    editedArea.up();
    for (let i = 0; i < editedArea.tblObjetPoint.length; i++) {
        document.getElementById("x"+(i+1)).value=editedArea.tblObjetPoint[i].x;
        document.getElementById("y"+(i+1)).value=editedArea.tblObjetPoint[i].y;
    }
}

/**
 * Clic sur flêche bas.
 * Modifi la position de la flêche de 1px vers le bas.
 */
function handleDownForm(){
    editedArea.down();
    for (let i = 0; i < editedArea.tblObjetPoint.length; i++) {
        document.getElementById("x"+(i+1)).value=editedArea.tblObjetPoint[i].x;
        document.getElementById("y"+(i+1)).value=editedArea.tblObjetPoint[i].y;
    }
}

/**
 * Clic sur flêche droit.
 * Modifi la position de la flêche de 1px vers la droite.
 */
function handleRightForm(){
    editedArea.right();
    for (let i = 0; i < editedArea.tblObjetPoint.length; i++) {
        document.getElementById("x"+(i+1)).value=editedArea.tblObjetPoint[i].x;
        document.getElementById("y"+(i+1)).value=editedArea.tblObjetPoint[i].y;
    }
}

/**
 * Clic sur flêche gauche.
 * Modifi la position de la flêche de 1px vers la gauche.
 */
function handleLeftForm(){
    editedArea.left();
    for (let i = 0; i < editedArea.tblObjetPoint.length; i++) {
        document.getElementById("x"+(i+1)).value=editedArea.tblObjetPoint[i].x;
        document.getElementById("y"+(i+1)).value=editedArea.tblObjetPoint[i].y;
    }
}

/**
 * Clic sur Supprimer Area objet.
 * Supprime l'objet Area sélectionné.
 */
function handleBtnDelObjArea() {

    if (document.getElementById("liste-area-objet").value != "") {
        for (let index = 0; index < tabMyAreaObjet.length; index++) {
            if (tabMyAreaObjet[index].id==document.getElementById("liste-area-objet").value) {
                tabMyAreaObjet[index].removeArea();
                tabMyAreaObjet.splice(index, 1);
                break;
            }
        }   
        refreshListAreaObj();
        console.log("Area supprimée");
    } else {
        console.log("Aucune area sélectionnée");
    }
}

/**
 * Clic sur Modifier Area objet.
 * Edit l'objet Area sélectionné.
 */
function handleBtnEditObjArea() {
    if (document.getElementById("liste-area-objet").value != "") {
        for (index = 0; index < tabMyAreaObjet.length; index++) {
            if (tabMyAreaObjet[index].getId() == document.getElementById("liste-area-objet").value) {
                editedArea.removeArea();
                editedArea = Object.assign(Object.create(Object.getPrototypeOf(tabMyAreaObjet[index])), JSON.parse(JSON.stringify(tabMyAreaObjet[index])));
                editedArea.tblObjetPoint.splice(0, editedArea.tblObjetPoint.length);
                tabMyAreaObjet[index].tblObjetPoint.forEach(point => {
                    editedArea.tblObjetPoint.push(new ObjetPoint(point.getX(), point.getY()))
                });

                tempArea = tabMyAreaObjet[index];
                tabMyAreaObjet.splice(index, 1);
                editedArea.createArea();
                break;
            }
        }

        refreshInterface();
        interfaceEdition(true);
    } else{
        console.log("Aucune forme sélectionnée");
    }
}

/**
 * Clic sur Dupliquer Area objet.
 * Duplique l'objet Area sélectionné.
 */
function handleBtnDuplicateObjArea() {
    if (document.getElementById("liste-area-objet").value != "") {
        for (index = 0; index < tabMyAreaObjet.length; index++) {
            if (tabMyAreaObjet[index].getId() == document.getElementById("liste-area-objet").value) {
                var newArea = new ObjetArea(tabMyAreaObjet[index].getName(), tabMyAreaObjet[index].getTypeAire(), tabMyAreaObjet[index].getAction(), tabMyAreaObjet[index].getTblObjetPoint(), tabMyAreaObjet[index].getRayon());

                var tabTemp=[];
                for (let i = 0; i < tabMyAreaObjet[index].getTblObjetPoint().length; i++) {
                    var tempX = parseInt(tabMyAreaObjet[index].getTblObjetPoint()[i].getX())+10;
                    var tempY = parseInt(tabMyAreaObjet[index].getTblObjetPoint()[i].getY())+10;
                    var tempPoint = new ObjetPoint(tempX, tempY);
                    tabTemp.push(tempPoint);
                }

                newArea.setTblObjetPoint(tabTemp);
                tabMyAreaObjet.push(newArea);
                newArea.createArea();
                break;
            }
        }

        refreshInterface();
    } else{
        console.log("Aucune forme sélectionnée");
    }
}

/**
 * Clic sur un Annuler la modification.
 * Annule la modification.
 */
function handleBtnCancelModif(){
    editedArea = tempArea;
    handleCreateArea();
}

//////////////////////////////////////////////////////////////////////////////////////////LISTNER//////////////////////////////////////////////////////////////////////////////////////////

/**
 * Construit un point d'un objet en fonction du clique
 * 
 * @param {event} event Information sur le clique
 */
function onClicSvgSetPoint(event){
    var forme = document.getElementById("areatype").options[document.getElementById('areatype').selectedIndex].value;
    var mappedImage = document.getElementById("mapped-img");
    var obj_left = 0;
    var obj_top = 0;
    var x = event.clientX;
    var y = event.clientY;
    var numPoint;
    
    if (editedArea.getTypeAire() == "poly") {
        numPoint=document.getElementById('div-point').children.length-2-nbClicDessin+1;
    } else if(editedArea.getTypeAire() == "rect") {
        numPoint=document.getElementById('div-point').children.length-nbClicDessin+1;
    } else if(editedArea.getTypeAire() == "circle") {
        numPoint=document.getElementById('div-point').children.length-nbClicDessin+2;
    }

    while (mappedImage.offsetParent){
        obj_left += mappedImage.offsetLeft;
        obj_top += mappedImage.offsetTop;
        mappedImage = mappedImage.offsetParent;
    }
    x -= obj_left;
    y -= obj_top;
    console.log("Clic en : x="+x+" y="+y);

    if(forme=="circle" && numPoint==2){
        var r=0;
        var coteX = x-document.getElementById("x1").value;
        var coteY = y-document.getElementById("y1").value;

        r = Math.sqrt((coteX * coteX) + (coteY * coteY));

        document.getElementById("r1").value=r;

        onChangeRayonArea();
    } else {
        document.getElementById("x"+numPoint).value=x;
        document.getElementById("y"+numPoint).value=y;
        
        onChangeCoordArea();
    }

    nbClicDessin = nbClicDessin-1;
    if (nbClicDessin<1) {
        handleManualDrawing(1);
    }
}

/**
 * Modification du nom de l'objet en cours d'édition.
 */
function onChangeNameArea(){
    editedArea.setName(document.getElementById("idaire").value);
    console.log(editedArea.getName());
}

/**
 * Modification de l'action de l'objet en cours d'édition.
 */
function onChangeActionArea(){
    editedArea.setAction(document.getElementById("action").value);
    console.log(editedArea.getAction());
}

/**
 * Modification de le forme de l'objet en cours d'édition.
 */
function onChangeFormeArea(){
    forme = document.getElementById("areatype").options[document.getElementById('areatype').selectedIndex].value;
    interfaceTypeAire(forme);
    editedArea.setTypeAire(forme);
    handleManualDrawing(1);
    console.log(editedArea.getTypeAire());
}

/**
 * Modification du rayon de l'objet en cours d'édition.
 */
function onChangeRayonArea(){
    editedArea.setRayon(document.getElementById("r1").value);
    console.log(editedArea.getRayon());
}

/**
 * Modification des coordonées de l'objet en cours d'édition.
 */
function onChangeCoordArea(){
    tblObjetPoint = [];
    let nbPoint;

    if (editedArea.getTypeAire() == "poly") {
        nbPoint=document.getElementById('div-point').children.length-2
    } else {
        nbPoint=document.getElementById('div-point').children.length
    }

    for(var i=0; i<nbPoint; i++) {
        var pointX = 0;
        var pointY = 0;
        if (document.getElementById("x"+(i+1)).value != null) {
            pointX = document.getElementById("x"+(i+1)).value;
        }
        if (document.getElementById("y"+(i+1)).value != null) {
            pointY = document.getElementById("y"+(i+1)).value;
        }
        var tempPoint = new ObjetPoint(
            pointX,
            pointY
        );
        
        tblObjetPoint.push(tempPoint);
    }
    editedArea.setTblObjetPoint(tblObjetPoint);
    console.log(editedArea.getTblObjetPoint());
}

/**
 * Affiche les objet lors de la perte de focus de liste-area-objet
 */
function onFocusOutListeAreaObjet(){
    showAllArea(true);
}

/**
 * Dès qu'un point déplacabe est sélectionné
 */
function onMouseDownPointMovable() {
    selectedPoint = this;
    document.getElementById("svg-points-movable").addEventListener('mousemove', onDragPointMovable, false);
    document.getElementById("svg-points-movable").addEventListener('mouseup', onMouseUpPointMovable, false);
}

/**
 * Dès qu'un point déplacabe est déplacé
 */
function onDragPointMovable(event) {
    var obj_left = 0;
    var obj_top = 0;
    var x = event.clientX;
    var y = event.clientY;
    var mappedImage = document.getElementById("mapped-img");

    while (mappedImage.offsetParent){
        obj_left += mappedImage.offsetLeft;
        obj_top += mappedImage.offsetTop;
        mappedImage = mappedImage.offsetParent;
    }
    xMove = parseInt(selectedPoint.getAttribute("cx"));
    yMove = parseInt(selectedPoint.getAttribute("cy"));

    x -= (obj_left+xMove);
    y -= (obj_top+yMove);

    selectedPoint.style.transform = "translate("+x+"px, "+y+"px)";
    selectedPoint.style.webkitTransform = "translate("+x+"px, "+y+"px)";
    selectedPoint.style.msTransform  = "translate("+x+"px, "+y+"px)";

    var numPoint = selectedPoint.id.substring(selectedPoint.id.search("Point")+5);
    numPoint = parseInt(numPoint.substring(0, numPoint.search("id")))+1;

    if (editedArea.getTypeAire()=="circle" && numPoint==2) {
        var r=0;
        var coteX = x+xMove-document.getElementById("x1").value;
        var coteY = y+yMove-document.getElementById("y1").value;

        r = Math.sqrt((coteX * coteX) + (coteY * coteY));

        document.getElementById("r1").value=r;
    } else {
        document.getElementById("x"+numPoint).value=parseInt(selectedPoint.getAttribute("cx"))+parseInt(x);
        document.getElementById("y"+numPoint).value=parseInt(selectedPoint.getAttribute("cy"))+parseInt(y);
    }

    updateOverview();
}

/**
 * Dès qu'un point déplacabe est "relaché"
 */
function onMouseUpPointMovable(event) {
    document.getElementById("svg-points-movable").removeEventListener('mousemove', onDragPointMovable, false);
    document.getElementById("svg-points-movable").removeEventListener('mouseup', onMouseUpPointMovable, false);

    var obj_left = 0;
    var obj_top = 0;
    var x = event.clientX;
    var y = event.clientY;
    var mappedImage = document.getElementById("mapped-img");

    while (mappedImage.offsetParent){
        obj_left += mappedImage.offsetLeft;
        obj_top += mappedImage.offsetTop;
        mappedImage = mappedImage.offsetParent;
    }
    x -= obj_left;
    y -= obj_top;

    selectedPoint.style.transform = "none";

    selectedPoint.setAttribute("cx", x);
    selectedPoint.setAttribute("cy", y);

    var numPoint = selectedPoint.id.substring(selectedPoint.id.search("Point")+5);
    numPoint = parseInt(numPoint.substring(0, numPoint.search("id")))+1;

    if (editedArea.getTypeAire()=="circle" && numPoint==2) {
        var r=0;
        var coteX = x-document.getElementById("x1").value;
        var coteY = y-document.getElementById("y1").value;

        r = Math.sqrt((coteX * coteX) + (coteY * coteY));

        document.getElementById("r1").value=r;
        onChangeRayonArea();
    } else {
        document.getElementById("x"+numPoint).value=selectedPoint.getAttribute("cx");
        document.getElementById("y"+numPoint).value=selectedPoint.getAttribute("cy");
        onChangeCoordArea();
    }

    selectedPoint=null;
}

/**
 * Dès qu'une forme est survolée avec la souris
 */
function onMouseMoveForme() {
    //if (editedArea.get) {
        this.setAttribute("style", "fill: rgb(255 0 0);stroke-width:2;stroke:rgb(0,0,0);opacity: 0.6;");
    //}
}

/**
 * Dès qu'une forme est quitté par la souris
 */
function onMouseLeaveForme() {
    this.setAttribute("style", "fill: rgb(255 255 255);stroke-width:2;stroke:rgb(0,0,0);opacity: 0.6;");
}

/**
 * Dès qu'un clic est effectué sur une forme
 */
function onClicSvgForme() {
    document.getElementById("liste-area-objet").value = this.id.substring(7);
    //handleFocusArea();
}

/**
 * Dès qu'une touche est préssée
 */
function onKeyDown(event) {
    if (event.key == "ArrowUp") {
        handleUpForm();
    } else if (event.key == "ArrowDown") {
        handleDownForm();
    } else if (event.key == "ArrowRight") {
        handleRightForm();
    } else if (event.key == "ArrowLeft") {
        handleLeftForm();
    }
}
//////////////////////////////////////////////////////////////////////////////////////////GLOBAL//////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("idaire").addEventListener('focusout', onChangeNameArea, true);
document.getElementById("action").addEventListener('focusout', onChangeActionArea, true);
document.getElementById("liste-area-objet").addEventListener('focusout', onFocusOutListeAreaObjet, true);
document.getElementById("areatype").addEventListener('input', onChangeFormeArea, true);
document.addEventListener('keydown', onKeyDown);

//Variable qui définit le point déplacable sélectionné 
var selectedPoint;

//Variable qui définit le nombre de clic 
var nbClicDessin=10;

//Tableau qui contien les map
var tabMyMap=[];

//Tableau qui contient les area d'une map
var tabMyAreaObjet=[];

//Area en cous d'édition
var editedArea = new ObjetArea;
var tempArea = new ObjetArea;

//Map en cours d'édition
var idEtitedMap = null;

//Gestion du modal
var modal = document.getElementById("modal-map");

var btn = document.getElementById("btn-show-code-map");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
    //var tmp = document.createElement("div");
    //tmp.appendChild(document.getElementById("map-img"));

    document.getElementById("p-code-map").textContent="";
    //document.getElementById("p-code-map").textContent=tmp.innerHTML;
    document.getElementById("p-code-map").textContent=document.getElementById("map-img").outerHTML;
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Confirmation de chargement du fichier
console.log("Fichier chargé!");