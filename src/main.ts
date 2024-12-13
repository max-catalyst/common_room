/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";
// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
WA.onInit().then(async () => {
	WA.controls.disableRoomList();
	WA.controls.disableInviteButton();

    // Check if the player has the "admin" tag
    const playerName = WA.player.name;
    const wokaUrl = await WA.player.getWokaPicture();
  
    let botUrl = `https://chat.cocreation.world/wincoll-turintest?playerName=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaUrl)}`;
    if (WA.player.tags.includes("admin")) {

    botUrl += "&tag=admin";
    } ///if function stops here
    // Get the player's name
  
    /* #TODO
    No need to initialize with = undefined.
    `var coWebSite` already initializes it as undefined.
    */
    
    let coWebSite: { close: () => void; } | undefined;
    var shouldClose = false;
    WA.room.area.onEnter("website1").subscribe(async () => {
      coWebSite = await WA.nav.openCoWebSite(botUrl);
      if (shouldClose) {
        if (coWebSite !== undefined) {
            coWebSite.close();
        }
        coWebSite = undefined;
        shouldClose = false;
      }
    });
    WA.room.area.onEnter("website2").subscribe(async () => {
        coWebSite = await WA.nav.openCoWebSite(botUrl);
        if (shouldClose) {
          if (coWebSite !== undefined) {
              coWebSite.close();
          }
          coWebSite = undefined;
          shouldClose = false;
        }
      });
      WA.room.area.onEnter("website3").subscribe(async () => {
        coWebSite = await WA.nav.openCoWebSite(botUrl);
        if (shouldClose) {
          if (coWebSite !== undefined) {
              coWebSite.close();
          }
          coWebSite = undefined;
          shouldClose = false;
        }
      });
      WA.room.area.onEnter("website4").subscribe(async () => {
        coWebSite = await WA.nav.openCoWebSite(botUrl);
        if (shouldClose) {
          if (coWebSite !== undefined) {
              coWebSite.close();
          }
          coWebSite = undefined;
          shouldClose = false;
        }
      });
    WA.room.area.onLeave("website1").subscribe(() => {
        if (coWebSite !== undefined) {
            coWebSite.close();
            coWebSite = undefined;
        } else {
            shouldClose = true;
        }
    });
    WA.room.area.onLeave("website2").subscribe(() => {
        if (coWebSite !== undefined) {
            coWebSite.close();
            coWebSite = undefined;
        } else {
            shouldClose = true;
        }
    });
    WA.room.area.onLeave("website3").subscribe(() => {
        if (coWebSite !== undefined) {
            coWebSite.close();
            coWebSite = undefined;
        } else {
            shouldClose = true;
        }
    });
    WA.room.area.onLeave("website4").subscribe(() => {
        if (coWebSite !== undefined) {
            coWebSite.close();
            coWebSite = undefined;
        } else {
            shouldClose = true;
        }
    });
  });


  
export {};
