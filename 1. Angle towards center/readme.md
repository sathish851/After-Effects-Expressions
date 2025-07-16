# 🎯 Auto-Rotate Layer Towards Center in After Effects

This After Effects expression allows any layer to automatically rotate to face the center of the composition. It's great for animations involving arrows, pointers, tracking elements, or UI indicators.

---

## ✨ Expression Code

```jsx
center = [ thisComp.width / 2, thisComp.height / 2 ];
delta = center - position;
dd = radiansToDegrees(Math.atan2(delta[1], delta[0]));
dd + 90;
```
---
## 🧠 How It Works


**center**: Calculates the center point of the current composition.

**delta**: Represents the vector from the layer’s position to the center.

**Math.atan2**: Returns the angle of that vector (in radians).

**radiansToDegrees(...)**: Converts the angle to degrees.

**+90**: Adjusts for the default layer orientation in After Effects.

```
💡 You can change center to any coordinate to make the layer point to a custom position.
```

---
## 📌 How to Use

1. Open your After Effects project.

2. Select the layer you want to auto-rotate.

3. Alt + Click the Rotation stopwatch.

4. Paste the expression above.

--- 

## Move the layer — it will now always face the center of the comp.


🧪 Customization Ideas
🔁 Make it point to another layer: Replace center with targetLayer.position.

🔄 Make it point away from center: Use dd + 270 or subtract 180.

📐 Offset for unique designs: Tweak the +90 to match your layer’s visual orientation.


---
## 📷 Preview

<p align="center">
  <img src="/1. Angle towards center/assets/towards_center.gif" alt="Demo GIF" />
</p>

<!-- Replace this with your actual preview GIF or image -->

---
## 🛠 Example Use Cases

- Arrows pointing to the center of a map or HUD.

- Eyes or dials following a central element.

- Radial UI components that react to central triggers.
