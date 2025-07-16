# 🎯 Auto-Rotate Layer Towards Another Layer in After Effects

This After Effects expression allows any layer to automatically rotate to face another layer — like a target. This is perfect for dynamic tracking elements, pointers, rotating objects toward icons, or eyes following a specific object.

---

## ✨ Expression Code

```jsx
center = thisComp.layer("star").position;
delta = center - position;
dd = radiansToDegrees(Math.atan2(delta[1], delta[0]));
dd + 90;
```
---
## 🧠 How It Works

**center**: Fetches the position of the "star" layer in the same composition.

**delta**: Vector pointing from the current layer to the "star" layer.

**Math.atan2**: Computes the angle of that vector in radians.

**radiansToDegrees(...)**: Converts the angle to degrees.

**+90**: Adjusts for default orientation of layers in After Effects.

```
💡 Change "star" to the name of any other layer you want the rotation to target.
```
---
## 📌 How to Use

1. Open your After Effects project.
2. Select the layer you want to auto-rotate.
3. Alt + Click the Rotation stopwatch.
4. Paste the expression above.
5. Make sure there's a layer named "star" (or change the name accordingly).

--- 

## 📷 Preview


<p align="center">
  <img src="/assets/toward_a_layer.gif" alt="Demo GIF" />
</p>

<!-- Replace this with your actual preview GIF or image -->

---
## 🛠 Example Use Cases

- Arrows or indicators following a moving target.
- Eyes tracking a character or mouse pointer.
- UI elements that align to dynamic objects in the scene
- Targeting indicators in HUDs or maps.

