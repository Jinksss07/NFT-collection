/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NonFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNonFT (_character, _mood, _haircolor, _weapon, _bling) {
    const NonFT = {
        "Name": _character,
        "Mood": _mood,
        "Haircolor": _haircolor,
        "Bling": _weapon,
        "Design": _bling,
    }
    NonFTs.push(NonFT);
    console.log("Minted: " + _character);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNonFTs () {
    for (let i = 0; i < NonFTs.length; i++){
        console.log("\nID: \t\t\t\t\t" + (i + 1));
        console.log("\nName: \t\t\t\t" + NonFTs[i].Name);
        console.log("Mood: \t\t\t\t" + NonFTs[i].Mood);
        console.log("Haircolor: \t\t\t" + NonFTs[i].Haircolor);
        console.log("Bling: \t\t\t\t" + NonFTs[i].Bling);
        console.log("Design: \t\t\t" + NonFTs[i].Design);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFT: \t" + NonFTs.length);
}

// call your functions below this line
mintNonFT("Anger", "Angry", "Red", "Flame", "Tuxedo");
mintNonFT("Sadness", "Sad", "Blue", "Ice", "TurtleNeck");
mintNonFT("Joy", "Joy", "Yellow", "Magic", "Dress,");
mintNonFT("Anxi", "Anxiety", "Orange", "Spear", "Braids");
mintNonFT("Embra", "Embarrassment", "Pink", "Horn", "Hoodie");
mintNonFT("Evy", "Envy", "Green", "Sparkling", "Sweater");
listNonFTs();
getTotalSupply();