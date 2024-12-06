---
title: "Project Phase 5: Beta Release"
layout: doc
---

# Project Phase 5: Beta Release

## Design Revisions

1. The scope of the Thread concept
> The original plan was Thread has its own page. When you create a thread, you can select certain users in the same family to have the access to this thread. However, this felt a little unclear and was hard for the user to build mental model. For example, A and B are both in family F1 and F2. Now you create thread T1 based on members of F1: A,B,C, and you create another thread T2 based on members of F2: A,B,D, the overlap of user A,B will lead to user's confusion about which family is this thread based on.

> Hence, we changed the entire backend and frontend, so that a thread is constructed based on each family. And to simplify the operations for the user, all members can access the thread that is created in the family. 

> Users can now see threads that correspond the family under the family tab > threads. They can also see all threads from different families in the family tab.

2. Removal of Commenting Concept

> The structure of the application were used to be Thread > Post > Comment. Where people can construct a Thread with a prompt, users can make Posts under the each Thread, and also Comment under Posts. We think making post performs the function of "replying" to the threads, the addition of "commenting" might confused the users because there are too many layers.

3. Family Request/ Invite

> The previous idea for the family concept was similar to the Friending Concept that we used to have, where users can send an request to join a family, family can also send an invitation to the user. However, we think family is supposed to be a more closed, private place, and we don't want user to type in random familyname or id to successfully send a request to a family, so we only retain the "invitation" feature. All members in the family can invite other users into the family, but request to join a family can no longer be made.


## Plan for User Tests
### Select and Schedule your Participants
The participants for the user tests are as follows:

1. **Mia Rodriguez**
   - Age: 21
   - US Citizen
   - Latina
   - Has a big family
   - Familiar with using apps for social connections and family organization.

2. **Phoebe Zhang**
   - Age: 20
   - Chinese Citizen
   - Chinese
   - Has a small family
   - Experienced with digital tools but primarily for communication with close family members.

3. **Isa He**
   - Age: 31
   - US Citizen
   - Chinese
   - Has a small family. Parents lives in the same family, but brother travels a lot.
   - Works in design and architecture, familiar with technology and with apps.


### Prepopulate Realistic Data

### Formulate a Task List
| Task Title                  | Instruction                                                                                          | Rationale                                                                                                     |
|-----------------------------|------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **1. Set Up Your Profile**  | "Log in to the app and complete your profile on Fam.ly."                | This task evaluates how  users can complete their profile and understand the importance of setting goals (and if goals that are not there should be added). |
| **2. Join a Family Group**  | "I am sending you an invitation to join my family. Please accept the invitation and see the members in the family." | This assesses how easily users can navigate to and join family groups by invitations, a core feature for connecting with others. |
| **3. Start a Thread**       | "Start a new discussion thread in your family group about any topic of your interest." | This task will see users' ability to engage with the Threading concept and contribute to discussions well. |
| **4. Explore the Timeline** | "Add a new memory to the family timeline." | This sees how users interact with the Timeline feature, to evlauate the ease of adding and engaging with memories. |

